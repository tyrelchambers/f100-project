import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.section`
  width: 100%;
  position: absolute;
  top: 3em;
  z-index: 2;

  .image {
    with: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

const Dropdown = ({ data }) => {
  if (!data.length) return null;

  return (
    <StyledDropdown className="bg-gray-100 rounded-lg shadow-lg p-4">
      <ul>
        {data.map((item) => (
          <li key={item.id} className="flex gap-4">
            <img src={item.image} alt="" className="image" />
            <div className="flex flex-col">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-sm break-words text-gray-600">{item.owner}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
