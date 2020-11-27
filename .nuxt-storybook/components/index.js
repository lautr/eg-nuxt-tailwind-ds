export { default as DsButton } from '../..\\components\\ds\\button.vue'
export { default as DsCard } from '../..\\components\\ds\\card.vue'

export const LazyDsButton = import('../..\\components\\ds\\button.vue' /* webpackChunkName: "components_ds/button" */).then(c => c.default || c)
export const LazyDsCard = import('../..\\components\\ds\\card.vue' /* webpackChunkName: "components_ds/card" */).then(c => c.default || c)
