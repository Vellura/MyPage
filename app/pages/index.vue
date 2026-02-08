<template>
    <div>
        <!-- Hero / Intro — asymmetric, anchored to bottom of viewport -->
        <section class="px-6 lg:px-8 min-h-[70vh] flex items-end pb-20 lg:pb-32">
            <div class="max-w-5xl mx-auto w-full">
                <p class="text-sm uppercase tracking-widest text-base-content/50 mb-4">
                    Welcome
                </p>
                <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Hi, I'm
                    <span class="text-primary">Veli-Matti Ahlroth</span>
                </h1>
                <p class="mt-6 text-lg lg:text-xl text-base-content/60 max-w-lg">
                    A place for things I've learned, things I'm still figuring out,
                    and the occasional idea that won't leave me alone.
                </p>
            </div>
        </section>

        <!-- About -->
        <section class="px-6 lg:px-8 py-20 lg:py-32">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-sm uppercase tracking-widest text-base-content/40 mb-10">
                    About
                </h2>
                <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                    <!-- Profile photo -->
                    <div class="shrink-0">
                        <img src="/images/content/me.jpg" alt="Veli-Matti Ahlroth"
                            class="w-64 lg:w-80 lg:h-112 object-cover rounded-2xl shadow-md" />
                    </div>
                    <!-- Text -->
                    <div class="max-w-prose space-y-5 text-lg leading-relaxed text-base-content/80">
                        <p>
                            I've spent nine years in test management and software delivery, leading
                            testing across large-scale programs, building tools, defining strategies,
                            and trying to make complex things work with real people in real organizations.
                        </p>
                        <p>
                            I tend to get curious about things and then go too deep. Sometimes that's
                            a new technology, sometimes it's a management problem, sometimes it's a
                            research paper that reframes something I thought I understood. The common
                            thread is probably that I like figuring out why things work the way they
                            do, and then testing whether that holds up in practice.
                        </p>
                    </div>
                </div>

                <!-- Speaking photos -->
                <div class="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div class="max-w-prose space-y-5 text-lg leading-relaxed text-base-content/80">
                        <p>
                            I started speaking publicly at Testing Assembly 2025 and decided it was
                            time to have a place to write as well. This is that place. If something
                            here makes you think or disagree, I'd like to hear about it.
                        </p>
                    </div>
                    <img src="/images/content/me-speaking1.jpg" alt="Speaking at Testing Assembly 2025"
                        class="sm:w-3/5 h-56 sm:h-64 object-cover rounded-2xl shadow-md" />
                </div>
            </div>
        </section>

        <!-- Latest from Blog -->
        <section v-if="latestPost" class="px-6 lg:px-8 py-20 lg:py-32">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-sm uppercase tracking-widest text-base-content/40 mb-10">
                    Latest writing
                </h2>
                <div class="max-w-2xl">
                    <BlogCard :post="latestPost" />
                </div>
                <NuxtLink to="/blog" class="inline-block mt-10 text-sm text-primary hover:underline underline-offset-4">
                    All posts →
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('home-latest', () =>
    queryCollection('blog').order('date', 'DESC').limit(1).all(),
)

const latestPost = computed(() => posts.value?.[0])
</script>
