<template>
  <div class="px-6 lg:px-8 py-4 lg:py-8">
    <div class="max-w-5xl mx-auto">
      <article v-if="post">
        <!-- Back link -->
        <NuxtLink
          to="/blog"
          class="text-sm text-base-content/50 hover:text-primary transition-colors"
        >
          ← Back to other Thoughts
        </NuxtLink>

        <!-- Header -->
        <header class="mt-8 mb-12 lg:mb-16">
          <time class="text-sm text-base-content/50 tabular-nums">
            {{ formatDate(post.date) }}
          </time>
          <h1 class="text-3xl lg:text-5xl font-bold tracking-tight mt-3 leading-tight">
            {{ post.title }}
          </h1>
          <p
            v-if="post.description"
            class="mt-4 text-lg text-base-content/60 max-w-prose"
          >
            {{ post.description }}
          </p>
          <div v-if="post.tags?.length" class="mt-5 flex gap-2 flex-wrap">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="badge badge-ghost badge-sm"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- Cover image -->
        <figure v-if="post.image" class="mb-12 lg:mb-16 -mx-6 lg:mx-0">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full rounded-none lg:rounded-2xl object-cover max-h-[28rem]"
          />
        </figure>

        <!-- Mobile TOC (collapsible) -->
        <details v-if="toc.length" class="lg:hidden mb-10">
          <summary class="text-sm font-medium cursor-pointer text-base-content/60 hover:text-base-content transition-colors">
            Table of contents
          </summary>
          <ul class="mt-3 space-y-2 text-sm pl-4">
            <li
              v-for="heading in toc"
              :key="heading.id"
              :class="heading.depth === 3 ? 'ml-3' : ''"
            >
              <a
                :href="`#${heading.id}`"
                class="text-base-content/60 hover:text-primary transition-colors"
              >
                {{ heading.text }}
              </a>
            </li>
          </ul>
        </details>

        <!-- Content + TOC layout -->
        <div class="lg:grid lg:grid-cols-[1fr_200px] lg:gap-16">
          <!-- Article body -->
          <div
            class="prose prose-lg max-w-none
              prose-headings:text-base-content
              prose-p:text-base-content/80
              prose-a:text-primary
              prose-strong:text-base-content
              prose-code:text-base-content
              prose-pre:bg-base-200
              prose-blockquote:text-base-content/60
              prose-blockquote:border-base-content/20
              prose-li:text-base-content/80
              prose-hr:border-base-content/10
              prose-img:rounded-xl prose-img:my-8"
          >
            <ContentRenderer :value="post" />
          </div>

          <!-- TOC sidebar — desktop -->
          <aside v-if="toc.length" class="hidden lg:block">
            <nav class="sticky top-8">
              <h3 class="text-xs uppercase tracking-widest text-base-content/40 mb-4">
                On this page
              </h3>
              <ul class="space-y-2 text-sm">
                <li
                  v-for="heading in toc"
                  :key="heading.id"
                  :class="heading.depth === 3 ? 'ml-3' : ''"
                >
                  <a
                    :href="`#${heading.id}`"
                    class="text-base-content/50 hover:text-primary transition-colors"
                  >
                    {{ heading.text }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first(),
)

// Extract TOC headings from the body AST (MinimarkTree format)
// MinimarkNode is either a string or a tuple: [tag, props, ...children]
const toc = computed(() => {
  if (!post.value?.body?.value) return []
  return extractHeadings(post.value.body.value)
})

interface TocHeading {
  id: string
  text: string
  depth: number
}

function extractHeadings(nodes: any[]): TocHeading[] {
  const headings: TocHeading[] = []
  for (const node of nodes) {
    if (!Array.isArray(node)) continue
    const [tag, props, ...children] = node
    if (['h2', 'h3'].includes(tag)) {
      headings.push({
        id: (props as Record<string, any>)?.id ?? '',
        text: getTextContent(children),
        depth: parseInt(tag.charAt(1)),
      })
    }
  }
  return headings
}

function getTextContent(nodes: any[]): string {
  return nodes
    .map((n: any) => {
      if (typeof n === 'string') return n
      if (Array.isArray(n)) return getTextContent(n.slice(2))
      return ''
    })
    .join('')
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useHead({
  title: () => (post.value ? `${post.value.title} — My Page` : 'My Page'),
})
</script>
