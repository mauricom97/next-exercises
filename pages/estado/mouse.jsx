import { useState } from "react"

export default function mouse() {

  
  const [x, setX] = useState(0)

  const [y, setY] = useState(0)

  function quandoMover(ev) {
    setX(ev.clientX)
    setY(ev.clientY)
  }



  const style = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <div style={style} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}