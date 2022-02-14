import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Buttons";
import Flake from "../components/Flake";
import FRPagination from "../components/FRPagination";
import Loader from "../components/Loader";
import { useFlakes } from "../hooks/useFlakes";
import Header from "../layouts/Header";

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

const modifiedFilter = (priority) => {
  switch (priority) {
    case "altitude": {
      return {
        mul_altitude: 1,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "spin": {
      return {
        mul_altitude: 0,
        mul_spin: 1,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "velocity": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 1,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "purity": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 1,
        mul_power: 0,
        mul_faction: 0,
      };
    }
    case "power": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 1,
        mul_faction: 0,
      };
    }
    case "faction": {
      return {
        mul_altitude: 0,
        mul_spin: 0,
        mul_velocity: 0,
        mul_purity: 0,
        mul_power: 0,
        mul_faction: 1,
      };
    }
    default: {
      return {
        mul_altitude: 0.1,
        mul_spin: 0.1,
        mul_velocity: 0.15,
        mul_purity: 0.15,
        mul_power: 0.25,
        mul_faction: 0.25,
      };
    }
  }
};

const Home = () => {
  const [selected, setSelected] = useState("");
  const [page, setPage] = useState(1);
  const { flakes } = useFlakes({
    ...modifiedFilter(selected),
    page,
  });

  console.log(flakes);

  const selectedHandler = (data) => {
    const faction = data.target.name;

    if (selected === faction) {
      setSelected("");
    } else {
      setSelected(faction);
    }
  };

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
            name="faction"
            onClick={(e) => selectedHandler(e)}
          >
            Faction
          </Button>
          <Button
            variant="second"
            active={selected === "power"}
            name="power"
            onClick={(e) => selectedHandler(e)}
          >
            Power
          </Button>
          <Button
            variant="second"
            active={selected === "purity"}
            name="purity"
            onClick={(e) => selectedHandler(e)}
          >
            Purity
          </Button>
          <Button
            variant="second"
            active={selected === "velocity"}
            name="velocity"
            onClick={(e) => selectedHandler(e)}
          >
            Velocity
          </Button>
          <Button
            variant="second"
            active={selected === "altitude"}
            name="altitude"
            onClick={(e) => selectedHandler(e)}
          >
            Altitude
          </Button>
          <Button
            variant="second"
            active={selected === "spin"}
            name="spin"
            onClick={(e) => selectedHandler(e)}
          >
            Spin
          </Button>
        </aside>
        <main className="w-full">
          {!flakes.data && (!flakes.isLoading || !flakes.isFetching) && (
            <div className="bg-slate-800 w-full p-3 rounded-lg">
              <p className="text-teal-300 text-center">No results found...</p>
            </div>
          )}

          {flakes.isLoading && <Loader />}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {flakes.data &&
              flakes.data.data.map((flake, id) => (
                <Flake data={flake} key={id} />
              ))}
          </ul>
          <FRPagination
            shape="rounded"
            count={100000 / 20}
            onChange={(_, page) => {
              console.log(page);
              setPage(page);
            }}
          />
        </main>
      </section>
    </StyledWrapper>
  );
};

export default Home;
