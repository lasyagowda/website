import "../css/Card.css";
import React from "react";
import Project from "./Project";
function Card({Project}) {

    return (
        <>
       
         <div class="project1 he">
            <h2>{Project.h}</h2>
            
             <img id="ii" src={Project.i}></img>
             </div>
             
        </>
    )
}
export default Card;