import React from 'react';
import estilos from './Card.module.css';

export default function Card(props) {
   return (
      <div className={estilos.formatoDiv}>
         <button onClick={props.onClose}>X</button>
         <h2 className={estilos.h2}>{props.name}</h2>
         <img src={props.image} alt="Imagen de personaje" />
         <div className={estilos.h2pieFoto}>
            <h2 >{props.species}</h2>
            <h2 >{props.gender}</h2>
            
         </div>
      </div>
   );
}
