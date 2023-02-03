import './App.css'
import SearchBar from './components/SearchBar.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import Cards
  from './components/Cards'

function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId)
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  return (
    <div className='App' style={{ padding: '25px' }}>

      <Routes>
        <Route path='' element={ } />
      </Routes>

      <div>
        <Nav onSearch={onSearch} random={random} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App
