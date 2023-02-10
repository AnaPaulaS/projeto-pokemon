<template>
  <div class="about">
    <PokemonDetails />
  </div>
</template>

<script>
import PokemonDetails from '@/components/PokemonDetails.vue'

export default {
  name: 'HomeView',
  components: {
    PokemonDetails
  }
}
</script>
