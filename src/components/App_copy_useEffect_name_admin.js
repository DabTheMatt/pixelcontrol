import "./App.css";
import { useState, useEffect } from "react";
// import { DiAptana } from "react-icons/di";
// import styled from "styled-components";



function App() {
  const [name, setName] = useState("Matt");
  const[admin, setAdmin] = useState(false);

  useEffect(()=>{
    console.log(`Celebrate ${name}`)
  }, [name])

  useEffect(()=>{
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);
  return (
    <section>
      <p>Congrats {name}</p>
      <button onClick={()=>setName("Jim")}>
        Change winner
      </button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={()=>setAdmin(true)}>
        Log in
      </button>
    </section>
  );
}

export default App;
