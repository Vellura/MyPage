export const useTheme = () => {
  const theme = useState<string>('theme', () => 'bumblebee')
  const isDark = computed(() => theme.value === 'dracula')

  const setTheme = (newTheme: string) => {
    theme.value = newTheme
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }

  const toggle = () => {
    setTheme(isDark.value ? 'bumblebee' : 'dracula')
  }

  const init = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme')
      if (saved) {
        setTheme(saved)
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dracula')
      }
    }
  }

  return { theme, isDark, toggle, init }
}
