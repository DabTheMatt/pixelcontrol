import React, {useState, useEffect} from "react";

function Hook3 () {
    const [fruit, setFruit] = useState("yellow");
    const [padding, setPadding] = useState(1);
    const [fontRemSize, setFontRemSize] = useState(16);

document.body.style.background = fruit;
document.body.style.fontSize = `${fontRemSize}px`;

useEffect(()=>{
    document.body.style.padding = `${padding}rem`;
    document.body.style.background = fruit;
    document.title = fruit;
})



    return (
        <div>
            <p>Fruit: {fruit}</p>
            <button onClick={()=>{setFruit("Orange")}}>Change fruit</button>
            <p>Padding: {padding}rem</p>
            <button onClick={()=>{setPadding(padding + 1)}}>Incrase padding by 1</button>
            <button onClick={()=>{setPadding(padding - 1)}}>Decrase padding by 1</button>
            <p>Font size: {fontRemSize}</p>
            <button onClick={()=>{setFontRemSize(fontRemSize + 1)}}>Incrase base font size by 10px</button>
            <button onClick={()=>{setFontRemSize(fontRemSize - 1)}}>Decrase base font size by 10px</button>
        </div>
    )
}

export default Hook3;