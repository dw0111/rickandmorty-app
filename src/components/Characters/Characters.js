import Card from '../Card/Card'
import './Characters.css'

export default function Characters({ characters }) {
  return (
    <div className="Characters">
      {characters.map(({ name, image, species, id }) => (
        <Card name={name} img={image} species={species} key={id} />
      ))}
    </div>
  )
}
