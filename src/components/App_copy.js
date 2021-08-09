import "./App.css";
import { useState } from "react";

import { FaStar } from "react-icons/fa";

const createStarsArray = (length) => {
  return [...Array(length)];
};

function Star({ selected = false, onSelect }) {
  return (<FaStar color={selected ? "red" : "gray"} 
  onClick={onSelect}/>
  );
}

function StarRating({ numberOfStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div>
    {createStarsArray(numberOfStars).map((el, i) => (
  <Star 
  key={i} 
  selected={selectedStars > i} 
  onSelect={()=>setSelectedStars(i+1)}
  />
  ))};
  <h2>{selectedStars} of {numberOfStars}</h2>
  </div>
  );
  
  

}

function App() {
  return <StarRating numberOfStars={8} />;
}

export default App;
