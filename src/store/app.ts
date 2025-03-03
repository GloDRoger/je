import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const { width } = useWindowSize()

  const isMobile = computed(() => width.value < 768)

  return { isMobile }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
