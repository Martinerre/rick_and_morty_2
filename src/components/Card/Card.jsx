import React from 'react';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addFav, deleteFav } from '../../redux/actions';


export function Card(props) {

   const [isFav, setIsFav] = useState(false)
   const location = useLocation()

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.deleteFav(props.id)
      } else {
         setIsFav(true);
         props.addFav(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [props.myFavorites]);

   return (
      <div className={styles.formatoCard}>
         <div className={styles.top}>
            {location.pathname === '/home'
               ? <button className={styles.x} onClick={props.onClose}>X</button>
               : null}
            {isFav
               ? (<button className={styles.heart} onClick={handleFavorite}>❤️</button>)
               : (<button className={styles.heart} onClick={handleFavorite}>🤍</button>)
            }
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

export function mapDispatchToProps(dispatch) {
   return {
      addFav: (id) => dispatch(addFav(id)),
      deleteFav: (id) => dispatch(deleteFav(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);