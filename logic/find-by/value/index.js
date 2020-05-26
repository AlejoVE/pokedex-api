// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)
const value = (pokeArray, value) => {
  const data = pokeArray;
  const matches = [];
  let newValue = value;
  if (value === "null") {
    newValue = null;
  }
  data.map((pokemonObject) => {
    for (let i in pokemonObject) {
      const match = pokemonObject[i] == newValue;
      if (match) {
        const pokemon = {
          name: pokemonObject.name,
          num: pokemonObject.num,
        };
        matches.push(pokemon);
        return;
      }
    }
  });
  if (matches.length < 1) {
    return null;
  }
  return matches;
};
module.exports = value;
