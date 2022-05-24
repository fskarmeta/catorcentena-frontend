import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    scrollBehavior: (to, from, savedPosition) => {
        try { return { top: 0 } } catch (e) { }
    },
}