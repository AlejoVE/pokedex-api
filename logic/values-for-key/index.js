const isEqual = require("lodash").isEqual;

const valuesForKey = (pokeArray, key) => {
  const values = [];
  const theyHaveProperty = pokeArray.filter((object) =>
    object.hasOwnProperty(key)
  );

  if (theyHaveProperty.length > 0) {
    theyHaveProperty.map((element) => {
      const value = element[key];
      const exits = values.includes(value);
      if (exits) {
        return;
      }
      values.push(value);
    });
  } else {
    console.log("No element has the given property");
    return;
  }
  return values;
};

module.exports = valuesForKey;

/* https://lodash.com/docs/4.17.15#isEqual

  isEqual is a function to compare objects and arrays.

  it will come in handy on this challenge

*/
