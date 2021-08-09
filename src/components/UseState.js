import React, {useState} from "react";

function Hook2 () {
    const [count, setCount] = useState(0);

    return (
        <div>

            <p>Two steps boots: {count}</p>
            <button onClick={()=>{
                setCount(count + 2)}}>Make 2 steps</button>



        </div>
    )
}

export default Hook2;