import './App.css'
import Player from './Player/Player'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState(2)
  const [score, setScore] = useState([3, 6])
  const [current, setCurrent] = useState(7)
  const [diceNumber, setDiceNumber] = useState(5)

  return (
    <main>
      <Player
        name="Player1"
        score={score[0]}
        current={activePlayer === 1 && current} //el operador y (&&) devuelve el ultimo valor de la condicion por ejemplo current
        isActive={activePlayer === 1}
      />
      <Player
        name="Player2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />

      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  )
}

export default App
