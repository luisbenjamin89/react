import './App.css'
import Player from './Player/Player'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScore] = useState([3, 6])
  const [current, setCurrent] = useState(7)
  const [diceNumber, setDiceNumber] = useState(5)

  const handleHold = () => {
    const newScore = [...score]
    newScore[activePlayer - 1] = current
    setScore(newScore)
    setActivePlayer(activePlayer === 1 ? 2 : 1)
    setCurrent(0)
  }

  const handelNewGame = () => {
    setActivePlayer(1)
    setScore([0, 0])
    setCurrent(0)
    setDiceNumber(0)
  }
  const handebleRollDice = () => {
    setDiceNumber(Math.floor(Math.random() * 6) + 1)
  }
  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((activePlayer)=>activePlayer===1?2:1)
      setCurrent(0)
    } else {
      setCurrent((current) => current + diceNumber)
    }
  }, [diceNumber])

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
      <button className="btn btn--new" onClick={handelNewGame}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handebleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
