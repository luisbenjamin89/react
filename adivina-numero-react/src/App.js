import './App.css'
// react hooks: useState, useRef, useEffect
import { useState} from 'react'
import {useRef } from  'react'
import {useEffect} from 'react'
import MostrarMensaje from './MostrarMensaje'

const randomNumber = () => Math.trunc(Math.random() * 20) + 1
const INITIAL_SCORE = 10

function App() {
  const [score, setScore] = useState(INITIAL_SCORE)
  const [guessNumber, setGuessNumber] = useState('')
  const [secretNumber, setSecretNumber] = useState(randomNumber())
  const [highscore, setHighscore] = useState(0)
  const inputRef = useRef(null)

  const handleCheck = () => {
    setGuessNumber(Number(inputRef.current.value))
  }

  useEffect(() => {
    if (guessNumber === '') return
    if (guessNumber === secretNumber) {
      if (score > highscore) {
        setHighscore(score)
      }
    } else {
      if (score > 1) {
        setScore(score - 1)
      } else {
        setScore(0)
      }
    }
  }, [guessNumber])

const estiloWinner={
  backgroundColor:'red',
  color:'white',
}

  const winner =guessNumber === secretNumber ? estiloWinner : {}

  const handleReset = () => {
    setScore(INITIAL_SCORE)
    setSecretNumber(randomNumber())
    setGuessNumber(0)
  }

  return (
    <>
      {console.log('App guessNumber', guessNumber, typeof guessNumber)}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleReset}>
          Again!
        </button>
        <div className="number" style={winner}>{secretNumber===guessNumber ?  secretNumber : '?'}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <MostrarMensaje
            guessNumber={guessNumber}
            secretNumber={secretNumber}
            score={score}
          />

          <p className="label-score">
            :100: Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            :first_place_medal: Highscore:{' '}
            <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </>
  )
}

export default App
