export const modifiedFilter = (priority) => {
  switch (priority) {
    case "altitude": {
      return {
        mul_altitude: 1,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "spin": {
      return {
        mul_altitude: 0,
        mul_spin: 1,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "velocity": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 1,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "purity": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 1,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "power": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 1,
        mul_faction: 0,
      };
    }
    case "faction": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 1,
      };
    }
    default: {
      return {
        mul_altitude: 0.1,
        mul_spin: 0.1,
        mul_velocity: 0.15,
        mul_purity: 0.15,
        mul_power: 0.25,
        mul_faction: 0.25,
      };
    }
  }
};
