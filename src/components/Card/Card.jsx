import React from 'react';
import estilos from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={estilos.formatoDiv}>
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h5 className={estilos.h2}>{props.name}</h5>
         </Link>
         <img src={props.image} alt="Imagen de personaje" />
         <div className={estilos.h2pieFoto}>
            <h2 >{props.species}</h2>
            <h2 >{props.gender}</h2>

         </div>
      </div>
   );
}
