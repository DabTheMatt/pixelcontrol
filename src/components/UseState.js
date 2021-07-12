import React, {useState} from "react";

function Hook2 () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Three miles boots distance: {count} miles</p>
            <button onClick={()=>{
                setCount(count + 3)}}>One step</button>
        </div>
    )
}

export default Hook2;