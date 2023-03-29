import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return (
      <div className={styles.formatDiv}>
         {characters.map((char) => (
               <Card
                  id={char.id}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  image={char.image}
                  onClose={() => props.onClose(char.id)}
                  key={i++}
               />
            )
            )
         }
      </div>)
}


