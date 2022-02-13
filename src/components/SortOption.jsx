import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "./Input";

const SortOption = ({ label, state, dispatch }) => {
  const filter = state.filters.find(
    (item) => item.label === label.toLowerCase()
  );
  console.log(filter.value);
  return (
    <div className="flex items-center justify-between w-full sort-option-wrapper py-4">
      <p className="text-white font-bold ">{label}</p>

      {/* {console.log(state.total)} */}
      <Input
        type="text"
        placeholder="0"
        value={filter.value}
        onInput={(e) =>
          dispatch({
            type: "update-value",
            payload: {
              value: e.target.value,
              label: label.toLowerCase(),
            },
          })
        }
        width="w-32"
      />
    </div>
  );
};

export default SortOption;
