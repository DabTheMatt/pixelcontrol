import "./App.css";
import { useReducer } from "react";

function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
   

  return (
    <div>
      <h1 onClick={()=>setNumber(5)}>
        {number}
      </h1>
    </div>
  );
}
export default App;
