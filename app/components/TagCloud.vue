<template>
  <div>
    <h3 class="text-sm uppercase tracking-widest text-base-content/50 mb-4">Tags</h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in tagCounts"
        :key="tag.name"
        class="badge badge-outline badge-sm gap-1 cursor-pointer hover:badge-primary transition-colors"
        @click="$emit('select', tag.name)"
      >
        {{ tag.name }}
        <span class="text-base-content/40">{{ tag.count }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  posts: Array<{ tags?: string[] }>
}>()

defineEmits<{
  select: [tag: string]
}>()

const tagCounts = computed(() => {
  const counts = new Map<string, number>()
  for (const post of props.posts) {
    for (const tag of post.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
})
</script>
