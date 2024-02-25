import React from "react";
export const Filter = ({text, active, onClick}) => {
    return (<button onClick = {onClick} className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${ active ? "bg-green-500 border-green-200  text-gray-100" : "border-green-300 text-green-300"}`}>
        {text}
    </button>);
}