import React from "react";
import { Link } from "react-location";
import styled from "styled-components";
import { color } from "../libs/color";

const StyledWrapper = styled.div`
  border: 5px solid
    rgb(
      ${(props) => {
        return props.colorHex;
      }}
    );
  position: relative;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0px 5px 15px rgba(${(props) => props.colorHex}, 0.25);
    transform: translateY(-5px);

    .details {
      opacity: 1;
    }
  }

  .name {
    width: fit-content;
    position: absolute;
    top: -0.05px;
    right: -0.05px;
    border-bottom-left-radius: 5px;
    background-color: rgb(
      ${(props) => {
        return props.colorHex;
      }}
    );
  }

  .details {
    opacity: 0;
    transition: all 0.2s ease;

    padding: 0.5em;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgb(
      ${(props) => {
        return props.colorHex;
      }}
    );
  }
`;

const Flake = ({ data }) => {
  console.log(data);

  return (
    <Link to={`/flake/${data.id}`}>
      <StyledWrapper
        className="rounded-lg overflow-hidden"
        colorHex={color(data.faction)}
      >
        <img src={data.image} className="img rounded-lg" />
        <p className="text-center px-4 py-1 name">{data.name}</p>
        <div className="details">
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(data)
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
                <span>
                  <p className="font-bold capitalize">{key}</p>
                  <p className="text-gray-800">{data[key]}</p>
                </span>
              ))}
          </div>
        </div>
      </StyledWrapper>
    </Link>
  );
};

export default Flake;
