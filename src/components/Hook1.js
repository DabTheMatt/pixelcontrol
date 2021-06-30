import React, {useState, useEffect} from 'react';

function Hook1 () {
const[count, setCount] = useState(0);
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState("banana");
const [todos, setTodos] = useState([{text: "Learn Hooks"}]);

const [player, setPlayer] = useState([{sex: "female"}]);

function SexStatus(player) {

const [sex, setSex] = useState(null);

useEffect(()=>{
    setSex("female");
    return (
        setSex("unknown")
    )
})

if (player[0].sex === "male") {
    return "Ładowanie..."
} 
return player[0].sex ? "Facet" : "Kobieta"
}

useEffect(() => {
document.title = `Title: "Rabarbar"`;    
})



    return (
        <div>
            <p>{SexStatus}</p>
            <p>Pressed {count} times</p>
            <button onClick={()=>setCount(count+1)}>Press me</button>
            <p>Age: {age}</p>
            <button onClick={()=>setAge(45)}>Set Age</button>
            <p>Favorite fruit: {fruit}</p>
            <button onClick={()=>setFruit("tomato!")}>Set tomato!</button>
            <p>Todo text: {todos[0].text}</p>
            <button onClick={()=>setTodos([{text: "processing"}])}>Start processing</button>
            <br/>
            <button></button>
        </div>
    )
}



export default Hook1;