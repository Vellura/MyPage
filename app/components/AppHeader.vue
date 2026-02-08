<template>
  <header class="px-6 lg:px-8 py-8">
    <nav class="max-w-5xl mx-auto flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
      >
        Home
      </NuxtLink>
      <div class="flex items-center gap-6">
        <NuxtLink
          to="/blog"
          class="text-sm text-base-content/70 hover:text-primary transition-colors"
        >
          Thoughts
        </NuxtLink>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
