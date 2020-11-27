<template>
  <div class="container pt-10">
    <div class="grid grid-cols-4 gap-5">
      <ds-card v-for="(card, i) in cards" :key="i" :title="card.title">
        {{ card.content }}
      </ds-card>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const cards = await $content('example.content').only(['cards']).fetch()
    return {
      cards: cards.cards
    }
  }
}
</script>
