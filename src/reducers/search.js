export const initialState = {
  total: 100,
  filters: [
    {
      label: "faction",
      touched: false,
      value: 0,
    },
    {
      label: "velocity",
      touched: false,
      value: 0,
    },
    {
      label: "spin",
      touched: false,
      value: 0,
    },
    {
      label: "altitude",
      touched: false,
      value: 0,
    },
    {
      label: "power",
      touched: false,
      value: 0,
    },
    {
      label: "purity",
      touched: false,
      value: 0,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "update-value": {
      const clone = { ...state };

      const filterClone = [...clone.filters];
      const filter = filterClone.find(
        (filter) => filter.label === action.payload.label
      );
      filter.value = action.payload.value;
      filter.touched = true;

      // add value from filters together
      const total = filterClone.reduce((acc, curr) => {
        return acc - curr.value;
      }, 100);

      state.total = total;

      // everytime total is updated, distribute the remaining value to the other filters
      const remaining = Math.floor(total / filterClone.length);
      filterClone.forEach((filter) => {
        if (filter.label !== action.payload.label) {
          filter.value = remaining;
        }
      });

      return {
        ...clone,
        filters: filterClone,
      };
    }
    default:
      return state;
  }
};
