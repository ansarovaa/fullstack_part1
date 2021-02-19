import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Buttons = ({goodOpinion, neutralOpinion, badOpinion}) => {
  return (
    <div>
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
    </div>
  )
}

const Statistic = ({text, counter, percent}) =>{
  return (
    <div>{text} {counter} {percent}</div>
  )
}

const Statistics = ({good, neutral, bad, all, positive, average}) => {
  if (all > 0) {
    return (
      <div>
      <Statistic text = 'good' counter={good}/> 
      <Statistic text = 'neutral' counter={neutral}/> 
      <Statistic text = 'bad' counter={bad}/> 
      <Statistic text = 'All' counter={all}/> 
      <Statistic text = 'positive' counter={positive}/>
      <Statistic text = 'average' counter={average} percent = ' %'/>       
      </div>
    )
  } else {

  return (
    <p>no feedbackis gathered</p>
  )
  }
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

  const all = good + neutral + bad

  const average = (good*1+neutral*0+bad*(-1))/(bad + good + neutral)

  const positive = good / (good + neutral + bad) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons goodOpinion = {goodOpinion} neutralOpinion = {neutralOpinion} badOpinion = {badOpinion}/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} positive = {positive} average = {average}/>   
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)