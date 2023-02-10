import axios from 'axios'

const API = 'https://pokeapi.co/api/v2'

const getRequest = async (endpoint) => {
  try {
    const url = `${API}/${endpoint}`

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const response = await axios.get(url, config)

    return generateSuccessResponse(response)
  } catch (error) {
    return generateErrorResponse(error)
  }
}

function generateSuccessResponse (response) {
  return {
    status: response.status,
    message: response.data,
  }
}

function generateErrorResponse (error) {
  return {
    status: error.response.status,
    message: error.response.data,
  }
}

export { getRequest }