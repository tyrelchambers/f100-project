import React, { useEffect, useReducer, useState } from "react";
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
  const [selected, setSelected] = useState("");
  const { flakes } = useFlakes();

  return (
    <StyledWrapper className="min-h-screen h-100 bg-slate-900">
      <Header />
      <section className="max-w-screen-2xl ml-auto mr-auto mt-20 gap-6 flex">
        <aside className="w-[400px] flex flex-col  bg-slate-800 p-4 rounded-lg gap-2">
          <p className="text-white mb-2">
            Choose a property to give the most weight
          </p>
          <Button
            variant="second"
            active={selected === "faction"}
            onClick={() => setSelected("faction")}
          >
            Faction
          </Button>
          <Button
            variant="second"
            active={selected === "power"}
            onClick={() => setSelected("power")}
          >
            Power
          </Button>
          <Button
            variant="second"
            active={selected === "purity"}
            onClick={() => setSelected("purity")}
          >
            Purity
          </Button>
          <Button
            variant="second"
            active={selected === "velocity"}
            onClick={() => setSelected("velocity")}
          >
            Velocity
          </Button>
          <Button
            variant="second"
            active={selected === "altitude"}
            onClick={() => setSelected("altitude")}
          >
            Altitude
          </Button>
          <Button
            variant="second"
            active={selected === "spin"}
            onClick={() => setSelected("spin")}
          >
            Spin
          </Button>

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
