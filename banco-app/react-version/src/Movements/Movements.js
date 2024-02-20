import  Movement from './Movenment'
import './Movements.css'

function Movements({movements}) {

return (
    <div className="movements">
 {movements.map((movement,index)=>
(
 <Movement position={index} amount={movement}/>
 )
 )}
    </div>
  )
}

export default Movements

