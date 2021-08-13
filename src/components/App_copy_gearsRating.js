import "./App.css";
import { useState } from "react";
import { DiAptana } from "react-icons/di";
import styled from "styled-components";

const createGearArray = (length) => {
  return [...Array(length)];
};

function Gear({ clicked, onSelect }) {
  const [gearColor, setGearColor] = useState("green");
  return (
    <DiAptana color={clicked ? "black" : "#ffe8d6"} size={22} onClick={onSelect} />
  );
}

function GearRating({ numberOfGears = 357 }) {
  const [clickedGears, setClickedGears] = useState(0);
  const [result, setResult] = useState("vote!");
  let score = parseInt((clickedGears * 100) / numberOfGears);
  return (
    <GearsRatingWrapper>
      {createGearArray(numberOfGears).map((el, i) => {
        return (
          <Gear
            key={i}
            clicked={clickedGears > i}
            onSelect={() => setClickedGears(i + 1)}
          />
        );
      })}
      <h2>
        Clicked Gears {clickedGears} out of {numberOfGears}
      </h2>
      <h3>Score: {score}%</h3>
      <h2>{result}</h2>
      <button onClick={() => setClickedGears(0)}>vote again</button>
    </GearsRatingWrapper>
  );
}

function App() {
  return (
    <div>
      <GearRating />
    </div>
  );
}


export const GearsRatingWrapper = styled.div`
width: 60%;
margin: 0 auto;
margin-top: 2em;
`;

export default App;
