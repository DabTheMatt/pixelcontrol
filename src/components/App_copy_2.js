import "./App.css";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const createHeartsArray = (length) => {
  return [...Array(length)];
};

function Heart({selected = false, onSelect}) {
  return <AiFillHeart color={selected ? "gold" : "black"}
  onClick = {onSelect}
/>;
}

function HeartRating({numberOfHearts = 7}) {
  const [selectedHearts, setSelectedHearts] = useState(0);
  return (
    <div>
      {createHeartsArray(numberOfHearts).map((el, i) => (
        <Heart 
        key={i}
        selected = {selectedHearts > i}
        onSelect = {()=>setSelectedHearts(i+1)}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <HeartRating />
    </div>
  );
}

export default App;
