import { useState } from "react"
import _ from "lodash"
export default function numbers () {

  const styleNumbers = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "50px",
    backgroundColor: "#000"
  }

  const styleNumber = {
    width: "100px",
    height: "100px",
    minWidth: "100px",
    minHeight: "100px",
    margin: "15px",
    backgroundColor: "#FFF",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  }

  let [numbers, setNumbers] = useState("")
  let [qtdeNum, setQtdeNum] = useState(6)

  function generateNumbers() {    
    const newNumbers = []
    for(let i = 0; i < qtdeNum; i++) {
      let randomNumber = _.random(1,60)
      while(newNumbers.includes(randomNumber)) {
        randomNumber = _.random(1,60)
      }
      newNumbers.push(randomNumber)
    }
    
    const divsWithNumbers = newNumbers.map((number, key) => {
      return (
        <span key={key} style={styleNumber}>
          { number }
        </span>
      )
    })
    setNumbers(divsWithNumbers)
    return
  }

  
  return (
      <div style={styleNumbers}>
        {numbers}

        <input type="text" style={
          {
            display: "flex",
            position: "absolute",
            marginTop: "12%"
          }
        } onChange={e => setQtdeNum(e.target.value)}/>

        <button style={{
          display: "flex",
          position: "absolute",
          marginTop: "20%"
        }} onClick={ generateNumbers }>Gerar numeros</button>
      </div>
  )
}