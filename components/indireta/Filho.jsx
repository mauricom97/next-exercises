export default function Filho(props) {

  return (
    <div>
      <h1>Filho #alterado</h1>
      <button onClick={() => props.funcao("PAI, PASSEI NO ENEM")}>Falar com o pai</button>
    </div>
  )
}