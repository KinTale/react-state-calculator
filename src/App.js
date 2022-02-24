import "./App.css"
import { useState } from 'react'

function App() {
  let [displayOne, firstSum] = useState(0)
  let [displayTwo, sum] = useState('+')
  let [displayThree, secondSum] = useState(0)
  let [displayFour, totalSum] = useState(0)

  //// DISPLAY 1
  const displayNumberOne = (e) => {
    if (displayOne === '0' && e.target.innerText === '0') {
      return
    }
    if (displayOne === 0) {
      displayOne = e.target.innerText
      firstSum(displayOne)
    } else {
      firstSum(displayOne += e.target.innerText)
    }
    calculation()
  }
  const displayClear = (e) => {
    firstSum(displayOne = 0)
  }

  ////// DISPLAY 2
  const operationAdd = () => {
    sum(displayTwo = '+')
  }
  const operationMinus = () => {
    sum(displayTwo = '-')
  }
  const operationMultiply = () => {
    sum(displayTwo = '*')
  }
  const operationDivide = () => {
    sum(displayTwo = '÷')
  }

  ////// DISPLAY 3
  const displayNumberThree = (e) => {
    if (displayThree === '0' && e.target.innerText === '0') {
      return
    }
    if (displayThree === 0) {
      displayThree = e.target.innerText
      secondSum(displayThree)
    } else {
      secondSum(displayThree += e.target.innerText)
    }
    calculation()
  }
  const displayClearSecond = (e) => {
    secondSum(displayThree = 0)

  }

  ////// DISPLAY 4
  const calculation = (e) => {
    const firstNumber = Number(displayOne)
    const secondNumber = Number(displayThree)
    if (displayTwo === '+') {
      let sum = firstNumber + secondNumber
      totalSum(sum)
    }
    if (displayTwo === '-') {
      let sum = firstNumber - secondNumber
      totalSum(sum)
    }
    if (displayTwo === '*') {
      let sum = firstNumber * secondNumber
      totalSum(sum)
    }
    if (displayTwo === '÷') {
      let sum = firstNumber / secondNumber
      totalSum(sum)
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{displayOne}</p>
        <div className="numbers">
          <button onClick={displayNumberOne}>1</button>
          <button onClick={displayNumberOne}>2</button>
          <button onClick={displayNumberOne}>3</button>
          <button onClick={displayNumberOne}>4</button>
          <button onClick={displayNumberOne}>5</button>
          <button onClick={displayNumberOne}>6</button>
          <button onClick={displayNumberOne}>7</button>
          <button onClick={displayNumberOne}>8</button>
          <button onClick={displayNumberOne}>9</button>
          <button onClick={displayNumberOne}>0</button>
          <button onClick={displayClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{displayTwo}</p>
        <div className="numbers operator">
          <button onClick={operationAdd}>+</button>
          <button onClick={operationMinus}>-</button>
          <button onClick={operationMultiply}>*</button>
          <button onClick={operationDivide}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{displayThree}</p>
        <div className="numbers">
          <button onClick={displayNumberThree}>1</button>
          <button onClick={displayNumberThree}>2</button>
          <button onClick={displayNumberThree}>3</button>
          <button onClick={displayNumberThree}>4</button>
          <button onClick={displayNumberThree}>5</button>
          <button onClick={displayNumberThree}>6</button>
          <button onClick={displayNumberThree}>7</button>
          <button onClick={displayNumberThree}>8</button>
          <button onClick={displayNumberThree}>9</button>
          <button onClick={displayNumberThree}>0</button>
          <button onClick={displayClearSecond}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{displayFour}</p>
      </div>
    </div>
  )
}

export default App
