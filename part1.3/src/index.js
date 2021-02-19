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
        <table>
        <tbody>
          <tr>
            <td><Statistic text = 'good'/> </td>
            <td><Statistic counter={good}/></td>
          </tr>
          <tr>
            <td><Statistic text = 'neutral'/> </td>
            <td><Statistic counter={neutral}/> </td>
          </tr>
          <tr>
            <td><Statistic text = 'bad'/> </td>
            <td><Statistic counter={bad}/> </td>
          </tr> 
          <tr>
            <td> <Statistic text = 'All'/></td>
            <td> <Statistic counter={all}/> </td>
          </tr>  
          <tr>
            <td><Statistic text = 'positive'/></td>
            <td><Statistic counter={positive}/></td>
          </tr>  
          <tr>
            <td><Statistic text = 'average'/>  </td>
            <td><Statistic counter={average} percent = ' %'/>  </td>
          </tr>           
        </tbody>
        </table>
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