import "./App.css";
import React, { useReducer } from "react";

const initialState = {
  message: "Hi!"
}

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `YELL! I JUST SAID ${state.message}` 
      };
      case "wisper":
        return {
          message: `sorry, i just said ${state.message}`
        };
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <p>Message: {state.message}</p>
      <button
      onClick={()=>dispatch({type: "yell"})}
      >Yell</button>
      <button
      onClick={()=>dispatch({type: "wisper"})}
      >wisper</button>
    </div>
  );
}
export default App;
