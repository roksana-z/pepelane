<template>
  <main class="main container max-width">
    <div class="main-wrapper">
      <FilterBlock />
      <div class="cards">
        <Card
          v-for="card in cardData"
          v-bind:card="card"
          v-bind:key="card.id"
        ></Card>
      </div>
    </div>
  </main>
</template>

<script>
import FilterBlock from './../components/filter-block.vue'
import Card from './../components/card.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Card,
    FilterBlock
  },
  computed: {
    cardData: function() {
      const vehicles = this.$store.state.vehicles
      const selectedType = this.$store.state.selectedType
      return selectedType === ''
        ? vehicles
        : vehicles.filter(vehicle => vehicle.type === selectedType)
    }
  }
}
</script>

<style></style>
