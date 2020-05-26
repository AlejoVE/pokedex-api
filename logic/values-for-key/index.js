const isEqual = require("lodash").isEqual;

const valuesForKey = (pokeArray, key) => {
  const values = [];
  const theyHaveProperty = pokeArray.filter((object) =>
    object.hasOwnProperty(key)
  );

  if (theyHaveProperty.length > 0) {
    const valuesProperty = theyHaveProperty.map((pokemon) => pokemon[key]);
    valuesProperty.forEach((value) => {
      const toEvaluate = values.find((array) => isEqual(array, value));
      const equals = isEqual(toEvaluate, value);
      if (equals) {
        return;
      }
      values.push(value);
    });
  } else {
    console.log("No pokemon has the given property");
  }
  return values;
};
module.exports = valuesForKey;

/* https://lodash.com/docs/4.17.15#isEqual

  isEqual is a function to compare objects and arrays.

  it will come in handy on this challenge

*/
