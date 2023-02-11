<template>
  <div class="container">
    <b-card no-body class="overflow-hidden" style="max-width: 1000px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="pokemon.picture"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h4 class="font-weight-bold">NOME POKEMON: {{ pokemon.name }}</h4>

              <b-table
                striped
                hover
                :items="pokemon.properties"
                :fields="fields"
              >
                <template v-slot:cell(name)="row">
                  {{ row.item.name }}
                </template>
              </b-table>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { getPokemonName } from "../api/api-pokemon.js";

export default {
  name: "PokemonDetails",
  props: {},
  data() {
    return {
      pokemon: [],
      fields: [
        { key: "prop", label: "Nome da propriedade" },
        { key: "value", label: "Valor" },
        { key: "effort", label: "Esforço" },
      ],
    };
  },
  async mounted() {
    const resp = await getPokemonName(this.$route.params.name);

    if (resp.status !== 200) {
      this.$toast.warning(`Erro: ${resp.message} `);
      return;
    }
    this.setPokemon(resp.message);
  },
  methods: {
    async setPokemon(item) {
      this.pokemon = {
        name: item.name,
        picture: item.sprites.front_default,
        properties: item.stats.map((m) => ({
          prop: m.stat.name,
          value: m.base_stat,
          effort: m.effort,
        })),
      };
    },
  },
};
</script>

<style lang="scss">
.container {
  text-align: center;
}
</style>
