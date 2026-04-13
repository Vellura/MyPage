<template>
  <table class="min-w-[700px] w-full border-collapse">
    <thead>
      <tr>
        <th class="w-36 lg:w-44" />
        <th
          v-for="col in landscape.columns"
          :key="col.id"
          class="text-xs uppercase tracking-widest text-base-content/40 font-medium text-left pb-3 px-2"
        >
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in landscape.rows" :key="row.id" class="align-top">
        <td
          class="text-sm font-medium text-base-content/70 pr-4 py-3 border-t border-base-content/10 whitespace-nowrap"
        >
          {{ row.label }}
        </td>
        <td
          v-for="col in landscape.columns"
          :key="col.id"
          class="py-3 px-2 border-t border-base-content/10"
        >
          <div class="flex flex-col gap-2">
            <div
              v-for="card in getCards(row.id, col.id)"
              :key="card.title"
              class="rounded-lg bg-base-200/60 p-2.5 cursor-pointer select-none transition-colors hover:bg-base-200"
              @click="$emit('toggleCard', card.title)"
            >
              <div class="flex items-start gap-2">
                <span
                  class="mt-0.5 w-2 h-2 rounded-full shrink-0"
                  :style="{ backgroundColor: landscape.tags[card.tag]?.color }"
                />
                <span class="text-xs leading-snug text-base-content/80">
                  {{ card.title }}
                </span>
                <a
                  v-if="card.url"
                  :href="card.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-auto shrink-0 text-base-content/30 hover:text-primary transition-colors"
                  title="Source"
                  @click.stop
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              </div>
              <Transition name="expand">
                <p
                  v-if="expanded.has(card.title)"
                  class="mt-2 ml-4 text-xs leading-relaxed text-base-content/50"
                >
                  {{ card.description }}
                </p>
              </Transition>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  landscape: {
    columns: { id: string; label: string }[]
    rows: { id: string; label: string }[]
    tags: Record<string, { label: string; color: string }>
    cards: { title: string; row: string; column: string; tag: string; description?: string; url?: string }[]
  }
  activeTags: Set<string>
  expanded: Set<string>
}>()

defineEmits<{
  toggleCard: [key: string]
}>()

function getCards(rowId: string, colId: string) {
  return props.landscape.cards.filter(
    (c) => c.row === rowId && c.column === colId
      && (props.activeTags.size === 0 || props.activeTags.has(c.tag)),
  )
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
