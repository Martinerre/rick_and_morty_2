//Hint: Este componente debe incluir el componente SearchBar

import SearchBar from "./SearchBar";
import {Link} from 'rea'

export default function Nav(props) {
    return (
        <div>

            <Link></Link>
            <SearchBar
                 onSearch={props.onSearch} random={props.random} />
            <h2>Elije tu personaje</h2>
        </div>
    )
}