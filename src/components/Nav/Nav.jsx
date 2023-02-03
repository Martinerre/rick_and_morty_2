//Hint: Este componente debe incluir el componente SearchBar

import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';
import About from "../About/About";

export default function Nav(props) {
    return (
        <div>

            <Link to='./About' element={<About />}/>
            <SearchBar
                 onSearch={props.onSearch} random={props.random} />
            <h2>Elije tu personaje</h2>
        </div>
    )
}