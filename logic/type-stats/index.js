const typeStats = (pokeArray, type) => {
  const thisType = pokeArray
    .map((pokemon) => pokemon.type)
    .filter((value) => value.includes(`${type}`));

  const typeCount = thisType.length;

  const thisTypeInWeaknesses = pokeArray
    .map((pokemon) => pokemon.weaknesses)
    .filter((value) => value.includes(`${type}`));

  const weaknessCount = thisTypeInWeaknesses.length;

  const result = {
    typeCount: typeCount,
    typeName: `${type}`,
    weaknessCount: weaknessCount,
  };
  return result;
};

module.exports = typeStats;
