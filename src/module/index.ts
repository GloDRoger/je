import type { App } from 'vue'
import { router } from '@/router/index'
import { createPinia } from 'pinia'

const pinia = createPinia()

export function installModule(app: App) {
  app.use(router).use(pinia)
}
