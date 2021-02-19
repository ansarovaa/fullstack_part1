import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }

  return (
    <div>{props.text} {props.counter} {props.percent}</div>
  )
}

const App = () => {
  const [allClicks, setAll] = useState([])
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOpinion = () => {
    setAll(allClicks.concat('1'))
    setGood(good + 1)
  }
  const neutralOpinion = () => {
    setAll(allClicks.concat('1'))
    setNeutral(neutral + 1)
  }
  const badOpinion = () => {
    setAll(allClicks.concat('1'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={goodOpinion}
        text='good'
      />
      <Button
        handleClick={neutralOpinion}
        text='neutral'
      />     
      <Button
        handleClick={badOpinion}
        text='bad'
      />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics   allClicks={allClicks} text = 'All' counter={bad + good + neutral}/> 
      <Statistics   allClicks={allClicks} text = 'average' counter={(good*1+neutral*0+bad*(-1))/(bad + good + neutral)}/>    
      <Statistics   allClicks={allClicks} text = 'positive' counter={(good)/(bad + good + neutral)*100} percent = ' %'/>      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
