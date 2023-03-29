//Hint: Este componente debe incluir el componente SearchBar

import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';
import About from "../About/About";
import Cards from "../Cards/Cards";

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} random={props.random} />
            <Link to='./About' element={<About />}>About</Link>
            <Link to='/' element={<Cards />}>Home</Link>
            {/* <h2>Elije tu personaje</h2> */}
        </div>
    )
}