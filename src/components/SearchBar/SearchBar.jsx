import styles from './Searchbar.module.css'
import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState(0);

   const handleSearch = (event) => {
      let { value } = event.target;
      setCharacter(value);
   };

   return (
      <div>
         <input className={styles.input} type="search" onChange={handleSearch} />
         <button className={styles.button} onClick={() => props.onSearch(character)}> Agregar </button>
         <button className={styles.button} onClick={props.random}> Random Character </button>
      </div>
   );
}
