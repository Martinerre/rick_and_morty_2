import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={styles.formatoDiv}>
         <div className={styles.top}>
            <button className={styles.x} onClick={props.onClose}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h5 className={styles.h2}>{props.name}</h5>
            </Link>
         </div>

         <img src={props.image} alt="Imagen de personaje" />

         <div className={styles.h2pieFoto}>
            <h2 >{props.species}</h2>
            <h2 >{props.gender}</h2>
         </div>
      </div>
   );
}
