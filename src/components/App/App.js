import { useState } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import './App.css'
import { useEffect } from 'react'
import getAllCharacters from '../../services/getAllCharacters'

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
      <div className="App__content">
        {characters.map(({ name, image, species, id }) => (
          <Card name={name} img={image} species={species} key={id} />
        ))}
      </div>
    </div>
  )
}

export default App
