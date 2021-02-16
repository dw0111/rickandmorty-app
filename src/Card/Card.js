import './Card.css'

export default function Card({ name, img, species }) {
  return (
    <section className="Card">
      <img src={img} alt={''} />
      <h2>{name}</h2>
      <p>Species: {species}</p>
    </section>
  )
}
