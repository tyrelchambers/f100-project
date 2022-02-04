import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Input from "./Input";

const SortOption = ({ label, value, state, dispatch }) => {
  return (
    <div className="flex flex-col w-full sort-option-wrapper py-4">
      <div className="flex items-center justify-between">
        <p className="text-white font-bold ">{label}</p>
        {state.hasOwnProperty(label.toLowerCase()) ? (
          <button
            className="text-red-300 text-xs"
            onClick={() =>
              dispatch({
                type: `REMOVE_FILTER`,
                payload: {
                  label: label.toLowerCase(),
                  min: 0,
                  max: 0,
                },
              })
            }
          >
            <FontAwesomeIcon icon={faMinus} className="mr-3" />
            Remove filter
          </button>
        ) : (
          <button
            className="text-teal-300 text-xs"
            onClick={() =>
              dispatch({
                type: `SET_FILTER`,
                payload: {
                  label: label.toLowerCase(),
                  min: 0,
                  max: 0,
                },
              })
            }
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            Add filter
          </button>
        )}
      </div>
      {console.log(state)}
      {state.hasOwnProperty(label.toLowerCase()) && (
        <div className="flex  gap-4 w-full flex-wrap mt-4">
          <Input
            type="number"
            placeholder="min"
            onInput={(e) =>
              dispatch({
                type: "UPDATE_FILTER_VALUE",
                payload: {
                  label: label.toLowerCase(),
                  min: e.target.value,
                },
              })
            }
            width="w-32"
          />
          <Input
            type="number"
            placeholder="max"
            onInput={(e) =>
              dispatch({
                type: "UPDATE_FILTER_VALUE",
                payload: {
                  label: label.toLowerCase(),
                  max: e.target.value,
                },
              })
            }
            width="w-32"
          />
        </div>
      )}
    </div>
  );
};

export default SortOption;
