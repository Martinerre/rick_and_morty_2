//Hint: Este componente debe incluir el componente SearchBar
import styles from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";
import Cards from "../Cards/Cards";
import Form from "../Forms/Forms";
import Favorites from '../Favorites/Favorites';
import { Link, NavLink } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={styles.nav}>
            <div className={styles.search}>
                {/* <img src="public/" alt="imagen?" /> */}
                <h2 className={styles.h2}
                    title="Introduce un numero, luego Agregar, o elije un personaje al azar" >
                    Elije tu personaje  </h2>
                <SearchBar onSearch={props.onSearch} random={props.random} />
            </div>
            <div className={styles.links}>
                <NavLink to='/home' className={({ isActive }) => isActive ? styles.isActive : styles.button} element={<Cards />}>Home</NavLink>
                <NavLink to='./About' className={({ isActive }) => isActive ? styles.isActive : styles.button} element={<About />}>About</NavLink>
                <NavLink to='./Favorites' className={({ isActive }) => isActive ? styles.isActive : styles.button} element={<Favorites />}>Favorites</NavLink>
                <Link to='/' className={styles.button} element={<Form />}>Logout</Link>
            </div>
        </div>
    )
}