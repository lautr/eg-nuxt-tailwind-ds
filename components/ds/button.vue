<template>
  <div :class="[$style['ds-button'], $style['ds-button--' + color]]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style lang="sass" module>
.ds-button
  @apply text-white font-bold py-2 px-4 rounded cursor-pointer transition text-center
  @each $color in (green, blue, gray)
    #{'&--' + $color}
      @apply #{'bg-' + $color}-600 #{'border-' + $color}-500
      &:hover
        @apply #{'bg-' + $color}-700
</style>
