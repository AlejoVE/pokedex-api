// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)
const keyValue = (pokeArray, key, value) => {
  const pokemons = [];
  const valueToString = value.toString();
  const data = pokeArray.filter(
    (pokemon) => pokemon[`${key}`] == valueToString
  );
  if (data.length < 1) {
    return null;
  }
  data.forEach((pokemonData) => {
    const pokemon = {
      num: pokemonData.num,
      name: pokemonData.name,
    };
    pokemons.push(pokemon);
  });

  return pokemons;
};

module.exports = keyValue;
