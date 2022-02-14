import { Pagination } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 2em;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  .Mui-selected {
    background: rgb(148 163 184) !important;
    color: white !important;
  }
  .MuiPagination-root {
    margin: 1em 0;

    .MuiPaginationItem-ellipsis {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
  }

  .MuiPaginationItem-root {
    background: rgb(51 65 85);

    height: 35px;
    width: 35px;
    &:hover {
      background: rgb(94 234 212);
    }
  }

  @media screen and (min-width: 426px) {
    .MuiPagination-root {
      position: sticky;
      top: 100px;
      height: fit-content;
    }
  }
  @media screen and (max-width: 425px) {
    .pagination-post-wrapper {
      flex-direction: column;
    }
    .MuiPagination-ul {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 320px) {
    .MuiPagination-ul {
      flex-wrap: nowrap !important;
    }
  }
`;
const FRPagination = ({ count, shape, onChange }) => {
  return (
    <StyledWrapper>
      <Pagination count={count} shape={shape} onChange={onChange} />
    </StyledWrapper>
  );
};

export default FRPagination;
