<template>
  <article class="group">
    <NuxtLink :to="post.path" class="block">
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="w-full rounded-xl object-cover max-h-48 mb-4"
      />
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
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="badge badge-ghost badge-sm"
        >
          {{ tag }}
        </span>
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
