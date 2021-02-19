import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (
    <div>{props.text} {props.counter} {props.percent}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOpinion = () => setGood(good + 1)
  const neutralOpinion = () => setNeutral(neutral + 1)
  const badOpinion = () => setBad(bad + 1)

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
      <Display text = 'good' counter={good}/>
      <Display text = 'neutral' counter={neutral}/>
      <Display text = 'bad' counter={bad}/> 
      <Display text = 'All' counter={bad + good + neutral}/> 
      <Display text = 'positive' counter={(good*1+neutral*0+bad*(-1))/(bad + good + neutral)}/>    
      <Display text = 'positive' counter={(good)/(bad + good + neutral)*100} percent = ' %'/>       
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
