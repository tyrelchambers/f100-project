import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Flake from "../components/Flake";
import SortOption from "../components/SortOption";
import { useFlakes } from "../hooks/useFlakes";
import Header from "../layouts/Header";
import { initialState, reducer } from "../reducers/search";

const StyledWrapper = styled.section`
  .sort-option-wrapper:not(:last-child) {
    border-bottom: 1px solid rgb(100 116 139);
  }

  aside {
    height: fit-content;
    position: sticky;
    top: 10px;
  }
`;

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { flakes } = useFlakes();
  return (
    <StyledWrapper className="min-h-screen h-100 bg-slate-900">
      <Header />
      <section className="max-w-screen-2xl ml-auto mr-auto mt-20 gap-6 flex">
        <aside className="w-[400px] flex flex-col  bg-slate-800 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm">Total points to allocate:</p>
            {state.total >= 0 && state.total <= 100 ? (
              <span className="text-teal-800 font-bold bg-teal-50 px-3 rounded-full">
                {state.total}
              </span>
            ) : (
              <span className="text-red-800 font-bold bg-red-50 px-3 rounded-full">
                {state.total}
              </span>
            )}
          </div>

          <SortOption label="Faction" state={state} dispatch={dispatch} />
          <SortOption label="Velocity" state={state} dispatch={dispatch} />
          <SortOption label="Spin" state={state} dispatch={dispatch} />
          <SortOption label="Altitude" state={state} dispatch={dispatch} />
          <SortOption label="Power" state={state} dispatch={dispatch} />
          <SortOption label="Purity" state={state} dispatch={dispatch} />
          <button className="bg-teal-300 p-2 rounded-lg mt-4 hover:bg-teal-400 transition-all">
            Apply
          </button>
        </aside>
        <main className="w-full">
          {!flakes.data && (
            <div className="bg-slate-800 w-full p-3 rounded-lg">
              <p className="text-teal-300 text-center">No results found...</p>
            </div>
          )}

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {flakes.data &&
              flakes.data.data.map((flake, id) => (
                <Flake data={flake} key={id} />
              ))}
          </ul>
        </main>
      </section>
    </StyledWrapper>
  );
};

export default Home;
