<template>
  <div class="BuscarPokemon">
    <b-row class="w-100">

      <b-col cols="12">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-3"
            class="text-left font-weight-bold text-primary-color"
            label="Busque pelo nome do seu pokemon"
            label-for="input-3"
          >
            <div class="inputWithIcon">
              <b-form-input
                id="input-1"
                v-model="name"
                type="text"
              ></b-form-input>              
            </div>
          </b-form-group>

          <b-button
            class="align-center button-primary-color border-only-bottom"
            type="submit"
            >Buscar</b-button
          >
        </b-form>
        
        {{pokemon}}

      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getPokemonName} from '../api/api-pokemon.js'

export default {
  name: 'BuscarPokemon',
  props: {
  },
  data(){
    return {
      name: '',
      pokemon: []
    }
  },
  methods: {
    async setPokemon(){
      const resp = await getPokemonName(this.name)
      this.pokemon = resp
    },
    onSubmit(event) {
      event.preventDefault()      
      if (!this.name) return 
      this.setPokemon()
    },
  }
}
</script>