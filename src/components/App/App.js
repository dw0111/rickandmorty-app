import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Header/Header'
import getAllCharacters from '../../services/getAllCharacters'
import './App.css'
import Characters from '../Characters/Characters'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  return (
    <div className="App">
      <Header title="Rick and Morty API" />
      <Characters characters={characters} />
    </div>
  )
}

export default App
