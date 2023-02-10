import { getRequest } from './backend-requests'

const getPokemonName = async (name) => {
  const endpoint = `pokemon/${name}`
  return getRequest(endpoint)
}

export { 
  getPokemonName
}