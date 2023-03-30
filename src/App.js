import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Forms from './components/Forms/Forms'
import styles from '../src/App.css'
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
  const username = 'mm'
  const password = 'mm'

  function login(userData) {
    if (userData.password && userData.username) {
      if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/')
      } else {
        alert('No existen registros con esos datos')
      }
    }
  }

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
          <Route path=':404' element={<Error />} />
        </Routes>
      </div>)
  } else {

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} random={random} />
      <Routes>
        <Route exact path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Outlet />
    </div>
  )
  }
}

export default App
