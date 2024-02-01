import api from "../services/consumer";

interface team {
  id: number;
  pokemon: string;
}
export default async function  calculateGenerationalRate(date: team[]){
  if(date.length == 0){
    return 0;
  }
  try {
    let maxGeneration = 0;

    for (const pokemon of date) {
      const generation = await api.getPokemonGenerationInfo(pokemon.pokemon);
      const generationNumber = Number(generation);

      if (generationNumber > maxGeneration) {
        maxGeneration = generationNumber;
      }
    }

    const rate = Math.min(maxGeneration * 0.03, 0.3);

    return rate * 100;
    
  } catch (error) {
    console.error('Erro ao calcular a taxa de geração:', error);
    throw error;
  }
}

    

  