<template>
  <div :class="$style['ds-card']">
    <img v-if="image" :src="image" />
    <span v-if="title" :class="$style['ds-card__title']">{{ title }}</span>
    <div>
      <slot />
    </div>
    <ds-button v-if="hasCta">
      {{ ctaWording }}
    </ds-button>
  </div>
</template>

<script>
export default {
  props: {
    ctaWording: {
      default: 'cta',
      type: String
    },
    hasCta: {
      default: false,
      type: Boolean
    },
    image: {
      default: null,
      type: String
    },
    title: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="sass" module>
.ds-card
  @apply block rounded-lg shadow-lg p-4 transition-shadow duration-500
  // setting up vertical flow
  > *
    @apply mt-3
    &:first-child
      @apply mt-0
  &__title
    @apply text-lg font-bold
  &:hover
    @apply shadow-2xl
</style>
