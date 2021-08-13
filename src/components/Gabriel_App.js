import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(setData);
  }, []);

  if (data) {
    console.log(data)
    
  }

  return (
    <div>
      <p>{data.activity}</p>
      <button onClick={()=>setData([])}>Remove data</button>
    </div>
  );
}
export default App;
