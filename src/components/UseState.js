import React, {useState} from "react";

function Hook2 () {
    const [count, setCount] = useState(0);

    return (
        <div>

            <p>Three steps boots: {count}</p>
            <button onClick={()=>{
                setCount(count + 3)}}>Make 3 steps</button>

        </div>
    )
}

export default Hook2;