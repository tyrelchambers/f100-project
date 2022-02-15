import React from "react";
import { Link } from "react-location";
import styled from "styled-components";

const StyledDropdown = styled.section`
  width: 100%;
  position: absolute;
  top: 3em;
  z-index: 2;
  max-height: 400px;
  overflow-y: scroll;
  .image {
    with: 50px;
    height: 50px;
    border-radius: 5px;
  }

  .name {
    transition: all 0.2s ease-in-out;
  }

  ul a {
    transition: all 0.2s ease-in-out;
    &:not(:last-child) {
      border-bottom: 1px solid rgb(230, 230, 230);
    }
    &:hover {
      background-color: rgb(230, 230, 230);

      .name {
        color: rgb(20 184 166);
      }
    }
  }
`;

const Dropdown = ({ data }) => {
  if (!data?.length) return null;

  return (
    <StyledDropdown className="bg-gray-100 rounded-lg shadow-lg">
      <ul className="flex flex-col ">
        {data.map((item) => (
          <Link to={`/flake/${item.id}`} className="py-4 px-2">
            <li key={item.id} className="flex gap-4">
              <img src={item.image} alt="" className="image" />
              <div className="flex flex-col">
                <p className="text-lg font-bold name text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm break-words text-gray-600">
                  {item.owner}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
