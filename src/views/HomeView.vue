<template>
  <div class="home">
    <img class="mt-2" src="https://4.bp.blogspot.com/-UYJjvmDemn0/WT3ov0R6cpI/AAAAAAAAvgE/frFGuJ4p4Ac7umWkdZZF5qTbnKdReWP2wCLcB/s1600/landscape-1456483171-pokemon2.jpg">
    
    <h3 class="font-weight-bold mt-2">
      POKEMON
    </h3>
    
    <BuscarPokemon />
  </div>
</template>

<script>
import BuscarPokemon from '@/components/BuscarPokemon.vue'

export default {
  name: 'HomeView',
  components: {
    BuscarPokemon
  }
}
</script>
