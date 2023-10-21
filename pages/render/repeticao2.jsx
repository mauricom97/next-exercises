import listaProdutos from "../../data/listaProdutos"

export default function repeticao2() {


  function renderizarLinhas() {
    console.log(listaProdutos)
    const list =  listaProdutos.map(prod => {
      return (
        <tr key={prod.id} style={comBorda}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
        </tr>
      )
    })
    return list
  }

const comBorda = {
  border: "1px solid #000",
}

  return (
    <div>
      <table style={comBorda}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}