import './CharacterSearch.css'

export default function CharacterSearch({ searchValue, handleOnChange }) {
  return (
    <input
      className="CharacterSearch"
      placeholder="Search character..."
      onChange={event => {
        handleOnChange(event.target.value)
      }}
      value={searchValue}
    />
  )
}
