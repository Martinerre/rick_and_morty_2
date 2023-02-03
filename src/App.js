import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          alert('No hay personajes con ese ID');
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
      <Nav onSearch={onSearch} random={random} />
      <Routes>
        <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
