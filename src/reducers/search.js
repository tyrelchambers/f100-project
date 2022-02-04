export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        [action.payload.label]: {
          min: action.payload.min,
          max: action.payload.max,
        },
      };
    case "REMOVE_FILTER": {
      const clone = { ...state };
      delete clone[action.payload.label];
      return clone;
    }

    case "UPDATE_FILTER_VALUE": {
      const clone = { ...state };
      clone[action.payload.label] = {
        ...clone[action.payload.label],
        [action.payload.key]: action.payload.value,
      };
    }
    default:
      return state;
  }
};
