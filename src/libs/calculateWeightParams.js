export const calculateWeightsParams = () => {
  const buttons = document.querySelectorAll(".weight-btn");
  const properties = [
    "power",
    "faction",
    "purity",
    "spin",
    "altitude",
    "velocity",
  ];
  const weights = [0.4, 0.2, 0.2, 0.1, 0.05, 0.05];
  const newWeights = {};

  // get all buttons that have a weight attached and pop the respective weight and properites from respective arrays
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    let name = element.name;
    let value = element.querySelector(".weight")?.getAttribute("data-value");

    if (name && value) {
      properties.findIndex((property, index) => {
        if (property === name) {
          properties.splice(index, 1);
        }
      });

      weights.findIndex((weight, index) => {
        if (weight == value) {
          weights.splice(index, 1);
        }
      });
      newWeights[name] = Number(value);
    }
  }

  // assign remaining weights with remaining properties
  for (let index = 0; index < properties.length; index++) {
    const property = properties[index];
    const weight = weights[index];

    newWeights[property] = weight;
  }

  return newWeights;
};
