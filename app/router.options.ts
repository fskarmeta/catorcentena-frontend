import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior: (_to, _from, savedPos) => {
    if (savedPos) return savedPos
    return { top: 0 }
  },
}
