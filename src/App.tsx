import CardGrid from './components/CardGrid.tsx'
import cards from './cards.json'
import { card } from './types.ts'
import { useEffect, useState } from 'react'

interface suitList {
  Arcana: card[],
  Wands: card[],
  Pentacles: card[],
  Cups: card[],
  Swords: card[]
}

function App() {
  const suits = cards.reduce((suits, card) => {
    const key = card.suit as keyof suitList
    if (!suits[key]) suits[key] = []
    suits[key].push(card)
    return suits
  }, {} as suitList)

  const [shuffled, setShuffled] = useState<card[]>([])
  useEffect(() => {
    const deck = [...cards]
    const shuf: card[] = []
    while (deck.length > 0) {
      const card = Math.floor(Math.random() * deck.length)
      shuf.push(...deck.splice(card, 1))
    }
    setShuffled(shuf)
  }, [])

  return (
    <>
      <header className="container-fluid bg-secondary">
        <div className="row">
        <button className="navbar-toggler d-lg-none col-1" aria-label="Card list toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#cardList" aria-controls="cardList">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
        <h1 className="fs-3 text-body-secondary col my-1 ps-0 ps-lg-4">Tarot</h1>
        </div>
      </header>
      <div className="container">
        <div className="row gx-0">
          <aside className="col-3 overflow-y-scroll">
            <div className="offcanvas-lg offcanvas-start vh-100" aria-labelledby="offcanvasNavLabel" id="cardList">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavLabel">Card List</h5>
                <button type="button" className="btn-close" data-bs-target="#cardList" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <nav className="offcanvas-body">
                <ul className="list-unstyled">
                  {Object.entries(suits).map(([suit, cards]) =>
                    <li className="list-group" key={suit}>
                      <h6 className="fw-bold">{suit}</h6>
                      <ol className="pb-3">
                        {cards.map((card: card) => <li value={card.value} key={card.value}>{card.name}</li>)}
                      </ol>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </aside>
          <main className="text-center col-12 col-sm-9">
            <CardGrid cards={shuffled.slice(0, 10)} />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
