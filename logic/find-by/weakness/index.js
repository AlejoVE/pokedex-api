const weakness = (pokeArray, type) => {
  const pokemons = [];
  const data = pokeArray.filter((pokemon) => pokemon.weaknesses.includes(type));
  if (data.length < 1) {
    return pokemons;
  }
  data.forEach((pokemonData) => {
    const pokemon = {
      name: pokemonData.name,
      num: pokemonData.num,
    };
    pokemons.push(pokemon);
  });
  return pokemons;
};
module.exports = weakness;
