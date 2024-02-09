import './MostrarMensaje.css'

function MostrarMensaje(props) {
  const { score, guessNumber, secretNumber } = props
  let respuesta = ''
  if (guessNumber === secretNumber) {
    respuesta = <p className="message">Numero correcto </p>
  } else if (score === 0) {
    respuesta = <p className="message">Has perdido </p>
  } else if (score === 10 && guessNumber === '') {
    respuesta = <p className="message">Empieza a adivinar </p>
  } else if (guessNumber > secretNumber) {
    respuesta = <p className="message">te has pasado </p>
  } else {
    respuesta = <p className="message">te has quedado corto </p>
  }
  return <> {respuesta}</>
}
export default MostrarMensaje
