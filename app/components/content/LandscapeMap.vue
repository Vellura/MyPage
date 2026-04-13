<template>
  <div v-if="landscape" class="not-prose my-12">
    <!-- Tag legend (clickable filter) + expand button -->
    <div class="flex flex-wrap items-center gap-3 mb-6">
      <button
        v-for="(tag, key) in landscape.tags"
        :key="key"
        class="inline-flex items-center gap-1.5 text-xs transition-all cursor-pointer"
        :class="activeTags.size === 0 || activeTags.has(String(key))
          ? 'text-base-content/70'
          : 'text-base-content/25'"
        @click="toggleTag(String(key))"
      >
        <span
          class="w-2.5 h-2.5 rounded-full shrink-0 transition-opacity"
          :style="{ backgroundColor: tag.color }"
          :class="activeTags.size === 0 || activeTags.has(String(key)) ? 'opacity-100' : 'opacity-30'"
        />
        {{ tag.label }}
      </button>
      <button
        v-if="activeTags.size > 0"
        class="text-xs text-base-content/40 hover:text-base-content/70 transition-colors ml-1 cursor-pointer"
        @click="activeTags = new Set()"
      >
        Clear
      </button>
      <button
        class="ml-auto text-xs text-base-content/40 hover:text-base-content/70 transition-colors cursor-pointer inline-flex items-center gap-1"
        @click="openFullscreen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
        Expand
      </button>
    </div>

    <!-- Inline grid -->
    <div class="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
      <LandscapeGrid
        :landscape="landscape"
        :active-tags="activeTags"
        :expanded="expanded"
        @toggle-card="toggle"
      />
    </div>

    <!-- Fullscreen dialog -->
    <dialog ref="dialogEl" class="modal" @close="fullscreen = false">
      <div class="modal-box max-w-none w-[95vw] h-[90vh] flex flex-col p-6">
        <!-- Dialog header -->
        <div class="flex items-center justify-between mb-4 shrink-0">
          <div class="flex flex-wrap items-center gap-3">
            <button
              v-for="(tag, key) in landscape.tags"
              :key="key"
              class="inline-flex items-center gap-1.5 text-xs transition-all cursor-pointer"
              :class="activeTags.size === 0 || activeTags.has(String(key))
                ? 'text-base-content/70'
                : 'text-base-content/25'"
              @click="toggleTag(String(key))"
            >
              <span
                class="w-2.5 h-2.5 rounded-full shrink-0 transition-opacity"
                :style="{ backgroundColor: tag.color }"
                :class="activeTags.size === 0 || activeTags.has(String(key)) ? 'opacity-100' : 'opacity-30'"
              />
              {{ tag.label }}
            </button>
            <button
              v-if="activeTags.size > 0"
              class="text-xs text-base-content/40 hover:text-base-content/70 transition-colors ml-1 cursor-pointer"
              @click="activeTags = new Set()"
            >
              Clear
            </button>
          </div>
          <form method="dialog">
            <button class="btn btn-sm btn-ghost text-base-content/50">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </button>
          </form>
        </div>
        <!-- Dialog grid -->
        <div class="overflow-auto flex-1">
          <LandscapeGrid
            :landscape="landscape"
            :active-tags="activeTags"
            :expanded="expanded"
            @toggle-card="toggle"
          />
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  source: string
}>()

const { data: landscape } = await useAsyncData(
  `landscape-${props.source}`,
  () =>
    queryCollection('landscapes')
      .where('stem', '=', `landscapes/${props.source}`)
      .first(),
)

const expanded = ref(new Set<string>())
const activeTags = ref(new Set<string>())
const fullscreen = ref(false)
const dialogEl = ref<HTMLDialogElement | null>(null)

function openFullscreen() {
  fullscreen.value = true
  dialogEl.value?.showModal()
}

function toggleTag(key: string) {
  if (activeTags.value.has(key)) {
    activeTags.value.delete(key)
  } else {
    activeTags.value.add(key)
  }
  activeTags.value = new Set(activeTags.value)
}

function toggle(key: string) {
  if (expanded.value.has(key)) {
    expanded.value.delete(key)
  } else {
    expanded.value.add(key)
  }
  // Trigger reactivity
  expanded.value = new Set(expanded.value)
}
</script>
