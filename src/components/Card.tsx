import './Card.css'
import { card } from '../types.ts'

interface propTypes {
  card: card
}

export default function Card({ card }: propTypes) {
  return (
    <figure id={card.name} className="figure tarot-card col">
      <img src={card.file} className="figure-img img-fluid rounded-3" />
      <figcaption className="figure-caption">{card.name}</figcaption>
    </figure>
  )
}
