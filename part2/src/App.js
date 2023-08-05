const App = (props) => {
  const { notes } = props
  console.log(notes.map(x => x.id))
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(x => 
        <li key={x.id}>
          {x.content}
        </li>)}
      </ul>
    </div>
  )
}

export default App