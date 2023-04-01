// This is used to convert the kms into miles

import React,{useState} from "react";
import './index.css';


function Converter(){
    const [km,setKm] =useState(0);

function handleChange(e){
    setKm(e.target.value);
}

function convert(km){
    return (km/1.609).toFixed(2);
}

return <div className="converter">
    <input type="number" value={km} onChange={handleChange}/>
    <p>{km} km is {convert(km)} miles</p>
</div>
}

export default Converter;