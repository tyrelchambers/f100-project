import React, { useReducer, useState } from "react";
import styled from "styled-components";
import SortOption from "../components/SortOption";
import Header from "../layouts/Header";
import { initialState, reducer } from "../reducers/search";

const StyledWrapper = styled.section`
  .sort-option-wrapper:not(:last-child) {
    border-bottom: 1px solid rgb(100 116 139);
  }
`;

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [results, setResults] = useState([]);
  return (
    <StyledWrapper className="min-h-screen h-100 bg-slate-900">
      <Header />

      <section className="max-w-screen-2xl ml-auto mr-auto mt-20 gap-6 flex">
        <aside className="w-[400px] flex flex-col  bg-slate-800 p-4 rounded-lg">
          <SortOption label="Faction" state={state} dispatch={dispatch} />
          <SortOption label="Velocity" state={state} dispatch={dispatch} />
          <SortOption label="Spin" state={state} dispatch={dispatch} />
          <SortOption label="Altitude" state={state} dispatch={dispatch} />
          <SortOption label="Power" state={state} dispatch={dispatch} />
          <SortOption label="Purity" state={state} dispatch={dispatch} />
        </aside>
        <main className="w-full">
          {results.length === 0 && (
            <div className="bg-slate-800 w-full p-3 rounded-lg">
              <p className="text-teal-300 text-center">No results found...</p>
            </div>
          )}
        </main>
      </section>
    </StyledWrapper>
  );
};

export default Home;
