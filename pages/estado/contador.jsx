import { useState } from "react"

export default function contador () {
  const style = {display: "flex", alignContent: "center", justifyContent: "center"}

  const [num, setNum] = useState(0)

  function addNum() {
    setNum(num+1)
  }
  function subNum() {
    setNum(num-1)
  }


  return (
    <div>
      <div style={style}>
        CONTADOR
      </div>
      <div style={style}>
        {num}
      </div>
      <div style={style}>
        <button onClick={subNum}>-</button>
        <button onClick={addNum}>+</button>
      </div>
    </div>
  )
}