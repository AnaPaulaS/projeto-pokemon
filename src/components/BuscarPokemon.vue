<template>
  <div class="BuscarPokemon">
    <b-row class="w-100">

      <b-col cols="12">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-3"
            class="text-left font-weight-bold text-primary-color"
            label="Busque pelo nome"
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
            variant="info"
            type="submit"
            >Buscar</b-button
          >
        </b-form>
      </b-col>
    </b-row>

    <b-row v-if="Object.keys(evolutions).length !== 0" class="w-100 mt-2">
      <b-col cols="12">

        <b-table striped hover :items="evolutions" :fields="fields" >
          <template v-slot:cell(picture)="row">
            <img v-if="row.item.picture"
              :src="row.item.picture"
              title="contact-img" class="avatar-sm"
            />
          </template>
          <template v-slot:cell(actions)="row">
            <b-button variant="info" @click="seeDetails(row.item.name)">
              Ver mais
            </b-button>
          </template>

        </b-table>

      </b-col>
    </b-row>

  </div>
</template>

<script>
import { getPokemonName, pokemonSpecies, apiUrlCall } from '../api/api-pokemon.js'

export default {
  name: 'BuscarPokemon',
  props: {
  },
  data(){
    return {
      name: '',
      pokemons: [],
      evolutions: [],
      item: [{ id: 40, name: 'Dickerson', picture: 'Macdonald' }],
      fields: [
        { key: 'name', label: 'Nome do Pokemon'},
        { key: 'picture', label: 'Imagem'},
        { key: 'actions', label: 'Ação' },
      ],
    }
  },
  methods: {
    async setPokemon(){
      const resp = await getPokemonName(this.name)      
      if(resp.status !== 200 ) {
        this.$toast.warning(`Erro: ${resp.message} `)
        return
      } else 
      this.evolutions.push({
        name: resp.message.name,
        picture: resp.message.sprites.front_default
      })
    },
    onSubmit(event) {
      event.preventDefault()    
      this.evolutions = []  
      if (!this.name) return 
      this.setPokemon()
      this.getEvolutions()
    },
    async getEvolutions(){      
      const species = await pokemonSpecies(this.name)      
      const evolutionsUrl = species.message.evolution_chain.url

      const resp = await apiUrlCall(evolutionsUrl)  
      const evolutions = resp.message.chain.evolves_to

      evolutions.map(e => this.evolutions.push({
        name: e.species.name,
        picture: ''
      }))   
    },
    seeDetails(name){
      console.log(name)
      // const resp = await getPokemonName(this.name)     
      // this.pokemons = resp.message
    }
  }
}
</script>