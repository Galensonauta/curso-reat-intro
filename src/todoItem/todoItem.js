import {CheckIcon} from "../Icono/CheckIcon"
import {BorrarIcon} from "../Icono/BorrarIcon"
import "../CreadorSubTarea/CreadorSubTarea.css";
import React from "react";
import "../Icono/Icono.css"
import { CreadorSubTarea } from "../CreadorSubTarea/CreadorSubTarea";
import { CreadorLisSub } from "../CreadorLisSub/CreadorLisSub";

function TodoItem(props){
                return(
     <li className="Lis">
        <CheckIcon 
        hecho={props.hecho}
        check={props.check}
        />
        <p 
        className={`Context ${props.hecho && "Context--hecho"}`}>
            {props.text}
        </p>
        <CreadorLisSub>+</CreadorLisSub>

        <CreadorSubTarea>+</CreadorSubTarea>   
       <BorrarIcon
        borrar={props.borrar}
        />
        </li>
        );
    }
export{TodoItem};




