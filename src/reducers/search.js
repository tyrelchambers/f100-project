export const initialState = {
  total: 100,
  filters: [
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
    case "update-remaining-filters": {
      const clone = { ...state };
      const filterClone = [...clone.filters];

      const untouchedFilters = filterClone.filter((filter) => !filter.touched);
      const remaining = Math.floor(clone.total / untouchedFilters.length);

      untouchedFilters.forEach((filter) => {
        filter.value = remaining;
        return filter;
      });

      const newFilters = [...filterClone, ...untouchedFilters];
      console.log([...new Set(newFilters)]);
      return {
        ...clone,
        filters: [...new Set(newFilters)],
      };
    }

    case "update-value": {
      const clone = { ...state };

      const filterClone = [...clone.filters];
      const filter = filterClone.find(
        (filter) => filter.label === action.payload.label
      );
      filter.value = Number(action.payload.value);
      filter.touched = true;

      return {
        ...clone,
        filters: [...filterClone],
      };
    }

    case "update-total": {
      const clone = { ...state };
      const filterClone = [...clone.filters];
      const absoluteTotal = 100;

      const total = filterClone.reduce((acc, filter) => {
        return acc - filter.value;
      }, absoluteTotal);

      clone.total = total;
      console.log(total);

      return {
        ...clone,
        filters: [...filterClone],
      };
    }
    default:
      return state;
  }
};
