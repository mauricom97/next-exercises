export default function Repeticao1() {
  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Laura'
  ]
  const items = listaAprovados.map((name, i) => <li key={i}>{name}</li>)
  return (
    <ul>
      {items}
    </ul>
  )
}