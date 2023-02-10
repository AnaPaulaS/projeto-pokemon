import axios from 'axios'
import { getRequest } from './backend-requests'

const getPokemonName = async (name) => {
  const endpoint = `pokemon/${name}`
  return getRequest(endpoint)
}

const pokemonSpecies = async (id) => {
  const endpoint = `pokemon-species/${id}`
  return getRequest(endpoint)
}

const evolutionChain = async (name) => {
  const endpoint = `evolution-chain/${name}`
  return getRequest(endpoint)
}

const apiUrlCall = async (url) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const response = await axios.get(url, config)

    return {
      status: response.status,
      message: response.data,
    }
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data,
    }
  }
}


export { 
  getPokemonName, pokemonSpecies, evolutionChain, apiUrlCall
}