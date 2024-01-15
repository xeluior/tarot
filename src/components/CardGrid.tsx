import Card from './Card.tsx'
import { card } from '../types.ts'

export default function({ cards }: { cards: card[] }) {
  const CARDS_PER_ROW = 5
  const rows = (() => {
    const result: card[][] = [[]]
    for (const card of cards) {
      if (result[result.length - 1].length === CARDS_PER_ROW) {
        result.push([])
      }
      result[result.length - 1].push(card)
    }
    return result
  })()

  return (
    <>
      {rows.map((row, i) => <div className="row gx-0" key={`row[${i}]`}>
        {row.map((card) => <Card card={card} key={card.name} />)}
      </div>
      )}
    </>
  )
}
