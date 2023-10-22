import If from "../../components/If";

export default function condicional2() {
  const number = 3
  return (
    <div>
      <If teste={number % 2 === 0 } >
        Numero Par
        </If>
        <If teste={number % 2 !== 0 } >
        Numero impar
        </If>
    </div>
  )
}