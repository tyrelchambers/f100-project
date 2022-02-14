import React, { useEffect } from "react";
import { useMatch } from "react-location";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import { useFlake } from "../hooks/useFlake";
import Header from "../layouts/Header";
import { color } from "../libs/color";

const StyledWrapper = styled.main`
  h2 {
    color: rgb(${(props) => props.colorHex});
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .details {
    border: 1px solid rgb(${(props) => props.colorHex});
    padding: 0.5em;
    border-radius: 8px;
  }
  .details__title {
    color: rgb(${(props) => props.colorHex});
  }

  .coloured-title {
    color: rgb(${(props) => props.colorHex});
  }
`;

const Flake = () => {
  const queryClient = useQueryClient();
  const {
    params: { id },
  } = useMatch();
  const { flake } = useFlake(id);

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries("flake");
      queryClient.removeQueries("flake");
    };
  }, [id]);

  return (
    <StyledWrapper
      className="min-h-screen h-100 bg-slate-900"
      colorHex={color(flake.data?.faction)}
    >
      <Header />
      {flake.data && (
        <section className="max-w-screen-2xl ml-auto mr-auto mt-10 flex gap-6 pb-10">
          <img src={flake.data.image} alt="" className="w-96 h-96 rounded-lg" />

          <div className="flex flex-col w-full">
            <h2>{flake.data.name}</h2>
            <div className="grid grid-cols-6 gap-6 w-full mt-6">
              {Object.keys(flake.data)
                .filter(
                  (key) =>
                    key === "faction" ||
                    key === "power" ||
                    key === "purity" ||
                    key === "altitude" ||
                    key === "spin" ||
                    key === "velocity"
                )
                .map((key, id) => (
                  <span className="details">
                    <p className="font-bold capitalize details__title">{key}</p>
                    <p className="text-gray-200 ">{flake.data[key]}</p>
                  </span>
                ))}
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold capitalize details__title mt-10 text-2xl">
                Rarity - percentile
              </h3>
              <div className="grid grid-cols-3 mt-6 gap-6">
                {Object.keys(flake.data)
                  .filter(
                    (key) =>
                      key === "perc_power" ||
                      key === "perc_purity" ||
                      key === "perc_altitude" ||
                      key === "perc_spin" ||
                      key === "perc_velocity"
                  )
                  .map((key, id) => (
                    <span>
                      <p className="font-bold capitalize text-gray-100 text-xl mt-2">
                        {key}
                      </p>
                      <p className="text-gray-400 ">
                        {(flake.data[key] * 100).toFixed(2)}%
                      </p>
                    </span>
                  ))}
              </div>
            </div>
            <hr className="mt-10 border-gray-700" />
            <div className="flex flex-col mt-10 gap-6">
              {Object.keys(flake.data)
                .filter(
                  (key) =>
                    key === "address" ||
                    key === "creator_address" ||
                    key === "owner"
                )
                .map((key, id) => (
                  <span>
                    <p className="font-bold capitalize text-gray-100 text-xl">
                      {key}
                    </p>
                    <p className="text-gray-400 ">{flake.data[key]}</p>
                  </span>
                ))}
            </div>
          </div>
        </section>
      )}
    </StyledWrapper>
  );
};

export default Flake;
