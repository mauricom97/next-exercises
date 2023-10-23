import Filho from "../../components/indireta/Filho"



function falarComigo(message) {
  alert(message)
}

export default function Pai(props) {
  return (
    <div>
      <Filho funcao={falarComigo}/>
    </div>
  )
}