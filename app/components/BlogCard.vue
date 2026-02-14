<template>
  <article class="group">
    <NuxtLink :to="post.path" class="block">
      <div class="flex flex-col md:flex-row md:gap-4">
        <img v-if="post.image" :src="post.image" :alt="post.title"
          class="w-full md:w-40 md:h-40 rounded-xl object-cover flex-shrink-0" />
        <div class="flex-1">
          <time class="text-sm text-base-content/50 tabular-nums">
            {{ formatDate(post.date) }}
          </time>
          <h3 class="text-xl lg:text-2xl font-semibold mt-1.5 group-hover:text-primary transition-colors">
            {{ post.title }}
          </h3>
          <p v-if="post.description" class="mt-2 text-base-content/70 leading-relaxed">
            {{ post.description }}
          </p>
          <div v-if="post.tags?.length" class="mt-3 flex gap-2 flex-wrap">
            <span v-for="tag in post.tags" :key="tag" class="badge badge-outline badge-sm">
              {{ tag.toUpperCase() }}
            </span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    path: string
    title: string
    date: string
    description?: string
    tags?: string[]
    image?: string
  }
}>()

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
