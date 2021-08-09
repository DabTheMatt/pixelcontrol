import React, { useState } from "react";

function Package() {
    const [check, setCheck] = useState(false);
    return(
        <div>
           <input type="checkbox" value={check} onChange={()=>setCheck((check) => !check)}/>
           <p>{check ? "Checked" : "Not Checked"} </p>
        </div>
    )
}

export default Package;