<template>
    <div class="px-6 lg:px-8 py-4 lg:py-8">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-16">Thoughts</h1>

            <div class="lg:grid lg:grid-cols-[1fr_220px] lg:gap-20">
                <!-- Posts column -->
                <div>
                    <!-- Featured latest post -->
                    <article v-if="posts?.[0]" class="mb-16 group">
                        <NuxtLink :to="posts[0].path" class="block">
                            <img v-if="posts[0].image" :src="posts[0].image" :alt="posts[0].title"
                                class="w-full rounded-xl object-cover max-h-64 mb-5" />
                            <time class="text-sm text-base-content/50 tabular-nums">
                                {{ formatDate(posts[0].date) }}
                            </time>
                            <h2 class="text-2xl lg:text-3xl font-bold mt-2 group-hover:text-primary transition-colors">
                                {{ posts[0].title }}
                            </h2>
                            <p v-if="posts[0].description"
                                class="mt-3 text-lg text-base-content/70 leading-relaxed max-w-prose">
                                {{ posts[0].description }}
                            </p>
                            <div v-if="posts[0].tags?.length" class="mt-4 flex gap-2 flex-wrap">
                                <span v-for="tag in posts[0].tags" :key="tag" class="badge badge-primary badge-sm">
                                    {{ tag.toUpperCase() }}
                                </span>
                            </div>
                        </NuxtLink>
                    </article>

                    <!-- Divider -->
                    <div v-if="olderPosts.length" class="divider mb-12" />

                    <!-- Older posts -->
                    <div class="space-y-10">
                        <BlogCard v-for="post in olderPosts" :key="post.path" :post="post" />
                    </div>

                    <!-- Empty state -->
                    <p v-if="!posts?.length" class="text-base-content/50 text-lg">
                        No posts yet. Check back soon!
                    </p>
                </div>

                <!-- Sidebar — desktop only -->
                <aside v-if="posts?.length" class="hidden lg:block">
                    <div class="sticky top-8">
                        <TagCloud :posts="posts" />
                    </div>
                </aside>
            </div>

            <!-- Tags — mobile -->
            <div v-if="posts?.length" class="lg:hidden mt-16">
                <TagCloud :posts="posts" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({ title: 'Blog — My Page' })

const { data: posts } = await useAsyncData('blog-list', () =>
    queryCollection('blog').order('date', 'DESC').all(),
)

const olderPosts = computed(() => posts.value?.slice(1) ?? [])

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
