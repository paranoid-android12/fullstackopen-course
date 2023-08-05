import { useState } from 'react'

const Display = ({plate}) => {
  return(
    <div>{plate}</div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const getRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const toSet = (index) => {
    const copy = [...points]
    copy[index] += 1
    setPoints(copy)
  }
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  console.log(points.indexOf(Math.max(...points)))
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Display plate={anecdotes[selected]}/>
      <Display plate={<p>has {points[selected]} votes</p>}/>
      <button onClick={() => toSet(selected)}>vote</button>
      <button onClick={() => getRandom()}>next anecdote</button><br/>
    
      <h1>Anecdote with most votes</h1>
      <Display plate={anecdotes[points.indexOf(Math.max(...points))]}/>
      <Display plate={<p>has {Math.max(...points)} votes</p>}/>
    </div>
  )
}

export default App