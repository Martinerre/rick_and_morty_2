//Hint: Este componente debe incluir el componente SearchBar

import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";
import Cards from "../Cards/Cards";
import Form from "../Forms/Forms";
import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <div>
            <h2>Elije tu personaje</h2>
            <h5>Introduce un numero, luego Agregar o eljie un personaje al azar</h5>
            <SearchBar onSearch={props.onSearch} random={props.random} />
            <Link to='./About' element={<About />}>About</Link>
            <Link to='/home' element={<Cards />}>Home</Link>
            <Link to='/' element={<Form />}>Logout</Link>
        </div>
    )
}