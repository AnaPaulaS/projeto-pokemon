<template>
  <div id="app">

    <h3 class="font-weight-bold">
      POKEMON
    </h3>
    <BuscarPokemon />
    
    

<!-- Nossa ideia de interface é uma tela com apenas um campo de busca no centro da tela, que ao ser 
acionado com o nome do pokémon, irá submeter esta pesquisa para a PokeAPI, retornando as informações 
do pokémon buscado e de suas evoluções (Evolution Chains).
Para cada um dos pokémons listados (o pesquisado e suas evoluções), gostaríamos de ver seu nome e sua imagem.
Quando clicarmos em um pokémon listado, queremos listar suas principais características 
(hp, attack, defense, special attack, special defense e speed). 
Obviamente quanto mais informações você mostrar melhor (organizadas, usando princípios básicos de UI/UX), 
então fique a vontade para exibir o que mais achar interessante. -->


<!-- stats[0].base_stat E stats[0].stat.name -->

  </div>
</template>

<script>
import BuscarPokemon from './components/BuscarPokemon.vue'

export default {
  name: 'App',
  components: {
    BuscarPokemon
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
