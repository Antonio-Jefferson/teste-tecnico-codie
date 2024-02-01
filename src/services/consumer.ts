import axios from "axios";
import { FormData } from "../@types/types";

async function getRegions() {
  try {
    const response = await axios.get(`${process.env.POKE_API_URL}/region`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching regions:', error);
    throw error;
  }
}

async function getCities(regionUrl: string) {
  try {
    const response = await axios.get(regionUrl);
    return response.data.locations;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
}

async function getPokemons() {
  try {
    const response = await axios.get(`${process.env.POKE_API_URL}/pokemon/?offset=20&limit=50`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
}

async function getDates() {
  try {
    const response = await axios.get(`${process.env.SCHEDULING_API_URL}/date`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dates:', error);
    throw error;
  }
}

async function getTimes(dete: string) {
  try {
    const response = await axios.post(
      `${process.env.SCHEDULING_API_URL}/time`,
      { dete },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os horários:', error);
    throw error;
  }
}

async function getPokemonGenerationInfo(pokemonName: string) {
  if (!pokemonName) {
    return null;
  }
  try {
    const response = await axios.get(`${process.env.POKE_API_URL}/pokemon/${pokemonName.toLowerCase()}`);
    const generation = Object.keys(response.data.sprites.versions);

    return generation.length;
  } catch (error) {
    console.error(`Erro ao obter informações do Pokémon ${pokemonName}: ${error}`);
    throw error;
  }
}

async function saveFormData(formData: FormData) {
  try {
    const response = await axios.post(
      `${process.env.SCHEDULING_API_URL}/appointment`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
    throw error;
  }
}

export default {
  getRegions,
  getCities,
  getPokemons,
  getDates,
  getTimes,
  getPokemonGenerationInfo,
  saveFormData
};
