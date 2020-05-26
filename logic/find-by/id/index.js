const id = (pokeData, id) => {
  const dataFiltered = pokeData.filter((pokemon) => pokemon.id === id);
  let pokemon = {};
  if (dataFiltered.length > 0) {
    let pokemon = dataFiltered[0];
    return pokemon;
  }

  return pokemon;
};

module.exports = id;
