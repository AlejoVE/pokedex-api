const evolutionOf = (pokeArray, name) => {
  const evolutions = [];
  const pokemon = pokeArray.find((element) => element.name === name);
  if (!pokemon) {
    return evolutions;
  }
  const pokemonId = { num: pokemon.num, name: pokemon.name };

  if (pokemon.hasOwnProperty("next_evolution")) {
    pokemon.next_evolution.forEach((element) => evolutions.push(element));
  }
  if (pokemon.hasOwnProperty("prev_evolution")) {
    pokemon.prev_evolution.forEach((element) => evolutions.push(element));
  }
  evolutions.push(pokemonId);

  if (evolutions.length === 1) {
    evolutions[0] = { name: pokemon.name, num: pokemon.num };
    return evolutions;
  }

  evolutions.sort((a, b) => {
    if (a.mum > b.num) {
      return 1;
    }
    if (a.num < b.num) {
      return -1;
    }
    return 0;
  });
  return evolutions;
};

module.exports = evolutionOf;

/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/
