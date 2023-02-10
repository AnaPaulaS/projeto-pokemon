<template>
  <div class="PokemonDetails">   
    {{pokemon}}
    <b-row v-if="Object.keys(pokemon).length !== 0" class="w-100">
      <b-col cols="12">
        <b-card
          :title="pokemon.name"
          :img-src="pokemon.picture"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="text-center mb-2"
        >
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import { getPokemonName } from '../api/api-pokemon.js'

export default {
  name: 'PokemonDetails',
  props: {
  },
  data(){
    return {
      pokemon: [],
    }
  },
  async mounted() {
    const resp = await getPokemonName(this.$route.params.name)  
    
    if(resp.status !== 200 ) {
        this.$toast.warning(`Erro: ${resp.message} `)
        return
    }
    this.setPokemon(resp.message)
  },
  methods: {
    async setPokemon(item){    
      console.log(item)
      this.pokemon = {
        name: item.name,
        picture: item.sprites.front_default
      }
      // this.pokemon = item
    }
  }
}
</script>