import Estilo from '../../components/Estilo'
import _ from "lodash"

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero />
      <Estilo numero={1} color="#FFF" direita />
    </div>
  )
}