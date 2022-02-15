import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Buttons";
import Flake from "../components/Flake";
import FRPagination from "../components/FRPagination";
import Loader from "../components/Loader";
import { useFlakes } from "../hooks/useFlakes";
import Header from "../layouts/Header";
import { calculateWeightsParams } from "../libs/calculateWeightParams";
import { allowDrop, drag, drop, resetDrag } from "../libs/dragDrop";
import { modifiedFilter } from "../libs/filterWeights";

const StyledWrapper = styled.section`
  .sort-option-wrapper:not(:last-child) {
    border-bottom: 1px solid rgb(100 116 139);
  }

  aside {
    height: fit-content;
    position: sticky;
    top: 10px;
  }
  .weight {
    margin-top: 5px;
  }
`;

const Home = () => {
  const [selected, setSelected] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(modifiedFilter(selected));
  const { flakes } = useFlakes({
    ...filters,
    page,
  });

  const selectedHandler = (data) => {
    const faction = data.target.name;

    if (selected === faction) {
      setSelected("");
    } else {
      setSelected(faction);
    }
    setFilters(modifiedFilter(selected));
  };

  const searchHandler = () => {
    const weights = calculateWeightsParams();
    setSelected("");
    setFilters(weights);
  };

  return (
    <StyledWrapper className="min-h-screen h-100 bg-slate-900">
      <Header />
      <section className="max-w-screen-2xl ml-auto mr-auto mt-20 gap-6 flex px-3">
        <aside className="w-[400px] ">
          <div className="flex flex-col bg-slate-800 p-4 rounded-lg gap-2">
            <p className="text-white mb-2 text-xs">
              Drag a weight to a specific property to give it priority. The
              remaining weights will be distributed among the other properties.
            </p>
            <ul
              className="grid grid-cols-3 gap-2 mb-4"
              id="weight-list"
              onDragOver={(event) => allowDrop(event)}
              onDrop={(event) => drop(event)}
            >
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.4"
                data-value={0.4}
                data-type="weight"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-gray-300"
              >
                0.4
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.2"
                data-value={0.2}
                data-type="weight"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-gray-300"
              >
                0.2
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.2.1"
                data-value={0.2}
                data-type="weight"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-gray-300"
              >
                0.2
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.1"
                data-value={0.1}
                data-type="weight"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-gray-300"
              >
                0.1
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.05"
                data-value={0.05}
                data-type="weight"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-gray-300"
              >
                0.05
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.05.1"
                data-value={0.05}
                data-type="weight"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-gray-300"
              >
                0.05
              </li>
            </ul>
            <Button
              variant="second"
              className="weight-btn"
              active={selected === "mul_faction"}
              name="mul_faction"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="faction-btn"
            >
              Faction
            </Button>
            <Button
              variant="second"
              className="weight-btn"
              active={selected === "mul_power"}
              name="mul_power"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="power-btn"
            >
              Power
            </Button>
            <Button
              variant="second"
              className="weight-btn"
              active={selected === "mul_purity"}
              name="mul_purity"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="purity-btn"
            >
              Purity
            </Button>
            <Button
              variant="second"
              className="weight-btn"
              active={selected === "mul_velocity"}
              name="mul_velocity"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="velocity-btn"
            >
              Velocity
            </Button>
            <Button
              variant="second"
              className="weight-btn"
              active={selected === "mul_altitude"}
              name="mul_altitude"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="altitude-btn"
            >
              Altitude
            </Button>
            <Button
              variant="second"
              className="weight-btn"
              active={selected === "mul_spin"}
              name="mul_spin"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="spin-btn"
            >
              Spin
            </Button>
            <div className="mt-4">
              <Button onClick={searchHandler}>Apply Weights</Button>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-200 text-sm">
              Developed for, and by, the Fractal community
            </p>
            <ul className="flex gap-2 mt-4">
              <li className="text-gray-400 text-xs">
                <span className="font-bold">UI:</span> Tyrel#9417
              </li>
              <li className="text-gray-400 text-xs">
                <span className="font-bold">API:</span> intell1g3ntbra1n#5683
              </li>
              <li className="text-gray-400 text-xs">
                <span className="font-bold">Discord Bot:</span> Vyryn#4618
              </li>
            </ul>
          </div>
        </aside>
        <main className="w-full">
          {!flakes.data && (!flakes.isLoading || !flakes.isFetching) && (
            <div className="bg-slate-800 w-full p-3 rounded-lg">
              <p className="text-teal-300 text-center">No results found...</p>
            </div>
          )}

          {flakes.isLoading && <Loader />}
          {selected && (
            <p className="text-white mb-4">
              Sorting by {selected.substring(4, selected.length)}
            </p>
          )}
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
