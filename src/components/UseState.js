import React, {useState} from "react";

function Hook2 () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={()=>{
                setCount(count + 1)}}>Add 1</button>
        </div>
    )
}

export default Hook2;