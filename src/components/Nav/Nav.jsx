//Hint: Este componente debe incluir el componente SearchBar
import styles from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";
import Cards from "../Cards/Cards";
import Form from "../Forms/Forms";
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={styles.nav}>
            <div>
                <h2>Elije tu personaje</h2>
                <h5>Introduce un numero, luego Agregar o eljie un personaje al azar</h5>
                <SearchBar onSearch={props.onSearch} random={props.random} />
            </div>
            <div className={styles.links}>
                <Link to='./About' className={styles.button} element={<About />}>About</Link>
                <Link to='/home' className={styles.button} element={<Cards />}>Home</Link>
                <Link to='/' className={styles.button} element={<Form />}>Logout</Link>
            </div>
        </div>
    )
}