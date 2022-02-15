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
  .weight {
    margin-top: 5px;
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

  const selectedHandler = (data) => {
    const faction = data.target.name;

    if (selected === faction) {
      setSelected("");
    } else {
      setSelected(faction);
    }
  };

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id, "--- drag ---");
  }

  function drop(ev) {
    console.log(ev, "-- drop ---");
    ev.preventDefault();
    const childWeights = ev.target.childNodes;

    if (ev.target.id !== "weight-list") {
      for (let index = 0; index < childWeights.length; index++) {
        const element = childWeights[index];
        if (element.classList) {
          if (element.classList.includes("weight")) return;
        }
      }
    }

    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  const resetDrag = (ev) => {
    ev.preventDefault();

    if (ev.target.parentNode.id === "weight-list") return;

    const parent = ev.target.parentNode;

    document
      .querySelector("#weight-list")
      .appendChild(document.getElementById(ev.target.id));
    parent.removeChild(document.getElementById(ev.target.id));
  };

  return (
    <StyledWrapper className="min-h-screen h-100 bg-slate-900">
      <Header />
      <section className="max-w-screen-2xl ml-auto mr-auto mt-20 gap-6 flex">
        <aside className="w-[400px] ">
          <div className="flex flex-col bg-slate-800 p-4 rounded-lg gap-2">
            <p className="text-white mb-2">
              Choose a property to give the most weight
            </p>
            <ul
              className="grid grid-cols-3 gap-2"
              id="weight-list"
              onDragOver={(event) => allowDrop(event)}
              onDrop={(event) => drop(event)}
            >
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.4"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-yellow-300"
              >
                0.4
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.2"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-yellow-300"
              >
                0.2
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.2.1"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-yellow-300"
              >
                0.2
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.1"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-yellow-300"
              >
                0.1
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.05"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-yellow-300"
              >
                0.05
              </li>
              <li
                draggable={true}
                onDragStart={(event) => drag(event)}
                onClick={(event) => resetDrag(event)}
                id="0.05.1"
                className="weight bg-gray-900 p-1 flex-1 rounded-md flex justify-center text-white border-2 border-yellow-300"
              >
                0.05
              </li>
            </ul>
            <Button
              variant="second"
              active={selected === "faction"}
              name="faction"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="faction-btn"
            >
              Faction
            </Button>
            <Button
              variant="second"
              active={selected === "power"}
              name="power"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="power-btn"
            >
              Power
            </Button>
            <Button
              variant="second"
              active={selected === "purity"}
              name="purity"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="purity-btn"
            >
              Purity
            </Button>
            <Button
              variant="second"
              active={selected === "velocity"}
              name="velocity"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="velocity-btn"
            >
              Velocity
            </Button>
            <Button
              variant="second"
              active={selected === "altitude"}
              name="altitude"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="altitude-btn"
            >
              Altitude
            </Button>
            <Button
              variant="second"
              active={selected === "spin"}
              name="spin"
              onClick={(e) => selectedHandler(e)}
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              id="spin-btn"
            >
              Spin
            </Button>
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
