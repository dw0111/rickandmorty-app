import { useState } from 'react'
import './Card.css'

export default function Card({ name, img, species }) {
  const [areDetailsShown, setAreDetailsShown] = useState(false)

  return (
    <section className="Card">
      <h2>{name}</h2>
      <button
        onClick={() => setAreDetailsShown(!areDetailsShown)}
        className="Card__button"
      >
        {areDetailsShown ? 'Hide Details' : 'Show Details'}
      </button>
      {areDetailsShown && <p>Species: {species}</p>}
      {areDetailsShown && <img src={img} alt={''} />}
    </section>
  )
}
