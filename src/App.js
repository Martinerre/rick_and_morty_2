import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import NotFound from './components/NotFound/NotFound'
import Forms from './components/Forms/Forms'
import styles from '../src/App.css'
import Form from './components/Forms/Forms'
import Favorites from './components/Favorites/Favorites'
import { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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

  // -------------------
  const [access, setAccess] = useState(false)
  const username = 'martin'
  const password = 'mm'

  function login(userData) {
    if (userData.pasword && userData.username) {
      if (userData.pasword === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
      } else {
        alert('No existen registros con esos datos');
      }
    }
  }

  // eslint-disable-next-line
  function logout() {
    setAccess(false);
  }

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line
  }, [access]);

  if (location.pathname === '/') {
    return (
      <div className='App' style={{ padding: '25px' }}>
        <Routes>
          <Route path='/' element={<Forms login={login} className={styles.form} />} />
          <Route path=':404' element={<NotFound />} />
        </Routes>
      </div>)
  } else {
    return (
      <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch} random={random} />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </div>
    )
  }
}

export default App
