import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Header/Header'
import getAllCharacters from '../../services/getAllCharacters'
import './App.css'
import Characters from '../Characters/Characters'
import CharacterSearch from '../CharacterSearch/CharacterSearch'

function App() {
  const [characters, setCharacters] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  return (
    <div className="App">
      <Header title="Rick and Morty API" />
      <CharacterSearch
        searchValue={searchInput}
        handleOnChange={setSearchInput}
      />
      <Characters
        characters={characters.filter(({ name }) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        )}
        searchInput={searchInput}
      />
    </div>
  )
}

export default App

// function markSearchResult(toSearch, toReplace) {
//   toReplace.replace(
//     new RegExp(toSearch, 'gi'),
//     match => `<mark>${match}</mark>`
//   )
// }
