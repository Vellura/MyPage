<template>
    <div class="px-6 lg:px-8 py-4 lg:py-8">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-8">Thoughts</h1>
            <div class="lg:grid lg:grid-cols-[1fr_220px] lg:gap-20">
                <!-- Posts column -->
                <div>
                    <!-- Featured latest post (only when unfiltered) -->
                    <article v-if="featuredPost && !isFiltering" class="mb-16 group">
                        <NuxtLink :to="featuredPost.path" class="block">
                            <img v-if="featuredPost.image" :src="featuredPost.image" :alt="featuredPost.title"
                                class="w-full rounded-xl object-contain max-h-80 mb-5" />
                            <time class="text-sm text-base-content/50 tabular-nums">
                                {{ formatDate(featuredPost.date) }}
                            </time>
                            <h2 class="text-2xl lg:text-3xl font-bold mt-2 group-hover:text-primary transition-colors">
                                {{ featuredPost.title }}
                            </h2>
                            <p v-if="featuredPost.description"
                                class="mt-3 text-lg text-base-content/70 leading-relaxed max-w-prose">
                                {{ featuredPost.description }}
                            </p>
                            <div v-if="featuredPost.tags?.length" class="mt-4 flex gap-2 flex-wrap">
                                <span v-for="tag in featuredPost.tags" :key="tag" class="badge badge-primary badge-sm">
                                    {{ tag.toUpperCase() }}
                                </span>
                            </div>
                        </NuxtLink>
                    </article>

                    <!-- Divider -->
                    <div v-if="displayPosts.length && featuredPost && !isFiltering" class="divider mb-12" />

                    <!-- Results count when filtering -->
                    <p v-if="isFiltering" class="text-sm text-base-content/50 mb-6">
                        {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'post' : 'posts' }} found
                    </p>

                    <!-- Post list -->
                    <div class="space-y-10">
                        <BlogCard v-for="post in displayPosts" :key="post.path" :post="post" />
                    </div>

                    <!-- Empty state -->
                    <p v-if="!posts?.length" class="text-base-content/50 text-lg">
                        No posts yet. Check back soon!
                    </p>
                    <p v-else-if="isFiltering && !filteredPosts.length" class="text-base-content/50 text-lg">
                        No posts match your search.
                    </p>
                </div>

                <!-- Sidebar — desktop only -->
                <aside v-if="posts?.length" class="hidden lg:block">
                    <div class="sticky top-8">
                        <!-- Search -->
                        <label class="input input-bordered input-sm w-full max-w-md mb-12">
                            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </g>
                            </svg>
                            <input v-model="search" type="search" class="grow" placeholder="Search posts…" />
                        </label>
                        <TagCloud :posts="posts" :active-tag="activeTag" @select="toggleTag" />
                    </div>
                </aside>
            </div>

            <!-- Tags — mobile -->
            <div v-if="posts?.length" class="lg:hidden mt-16">
                <label class="input input-bordered input-sm w-full max-w-md mb-6">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </g>
                    </svg>
                    <input v-model="search" type="search" class="grow" placeholder="Search posts…" />
                </label>
                <TagCloud :posts="posts" :active-tag="activeTag" @select="toggleTag" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({ title: 'Blog — My Page' })

const { data: posts } = await useAsyncData('blog-list', () =>
    queryCollection('blog').order('date', 'DESC').all(),
)

// --- Filter state ---
const search = ref('')
const activeTag = ref('')

const isFiltering = computed(() => search.value.trim() !== '' || activeTag.value !== '')

const filteredPosts = computed(() => {
    let result = posts.value ?? []
    const q = search.value.trim().toLowerCase()

    if (activeTag.value) {
        result = result.filter(p => p.tags?.includes(activeTag.value))
    }
    if (q) {
        result = result.filter(p =>
            p.title.toLowerCase().includes(q)
            || p.description?.toLowerCase().includes(q),
        )
    }
    return result
})

// When not filtering: first post is featured, rest are listed below
// When filtering: all matching posts shown as a flat list
const featuredPost = computed(() => posts.value?.[0] ?? null)
const displayPosts = computed(() =>
    isFiltering.value
        ? filteredPosts.value
        : (posts.value?.slice(1) ?? []),
)

function toggleTag(tag: string) {
    activeTag.value = activeTag.value === tag ? '' : tag
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
