import { useState } from "react"
export default function formulario () {
  const [text, setValor] = useState("")
  return (
    <div>
      <input type="text" onChange={e => setValor(e.target.value)}/>
      <div>
        {text}
      </div>
    </div>
  )
}