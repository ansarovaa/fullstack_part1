import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = (props) => {
  return (
    <div>{props.text}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState([0,0,0,0,0,0])
  const nextAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))
  const voteAnecdote = () => {
    let copy = [...score]
    copy[selected] += 1
    setScore(copy)
  }
  
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <Display text={anecdotes[selected]}/>
      <Button
        handleClick={voteAnecdote}
        text='Vote'
      />
      <Button
        handleClick={nextAnecdote}
        text='Next anecdote'
      />
      <p>It has {score[selected]} votes</p>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[score.indexOf(Math.max(...score))]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)