import { useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './components/noteService'

const Filter = ({func}) => {

  return(
    <form>
      <div>Search: <input onChange={func}/></div>
    </form>
  )
}

const PersonForm = ({addNote, newName, newNum, setNewName, setNewNum}) => {
  return(
    <form onSubmit={addNote}>
      <div>Name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/></div>
      <div>Number: <input value={newNum} onChange={(event) => setNewNum(event.target.value)}/></div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>
  )
}

const AddSuccess = ({text}) => {
  const staile = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20',
    borderStyle: 'solid',
    borderRadius: '5',
    padding: '10',
    marginBottom: '10'
  }
  if(text === ''){
    return null
  }
  else{
  return(
    <div>
      <p style={staile}>{text}</p>
    </div>
  )}
}

const Persons = ({persons, yeet}) => {
  return(
    persons.map(x => 
    <div>
      <Note key={x.id} id={x.id} note={x}/> 
      <button onClick={() => yeet(x.id)}>Delete</button>
    </div>)
    )
}

const App = () => {
  console.log("Pass to main")
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [persons, setPersons] = useState([]) 
  const [filteredPersons, setFilteredPersons] = useState([])
  const [successMessage, setSuccessMessage] = useState('')

  console.log(newName, "   ", newNum)

  const hook = () => {
    noteService.getAll()
    .then(x => {
      setPersons(x)
      setFilteredPersons(x)
    })
  }
  useEffect(() => {
    console.log("Ran")
      hook();
    }, []);


  const searchContact = (event) => {

    if(event.target.value !== ''){
      const setUpdated = (persons.filter((x) => {return x.name.toLowerCase().includes(event.target.value.toLowerCase())}))
      setFilteredPersons(setUpdated)
    }
    else{
      setFilteredPersons(persons)
    }
  }

  const yeet = (id) => {
    if(window.confirm(`Delete ${id}?`)){
      noteService.yeet(id)
      const currPerson = persons.filter(x => x.id !== id)

      setPersons(currPerson)
      setFilteredPersons(currPerson)
    }
  }

  const addNote = (event) => {
    event.preventDefault()
    const find = persons.some(x => 
      (x.name === newName)
    )
    
    if(find === true){
      if(window.confirm('This name already exists in the phonebook, do you want to replace the number?')){
        persons.map(x => {
          if(x.name === newName){
            const repl = {
              id: x.id,
              name: newName,
              number: newNum
            }
            noteService.update(x.id, repl)
            hook()
          }
        })
      }
    }
    else if(newName === '' || newNum === ''){
      window.alert('Fill both input fields!')
      setNewName('')
      setNewNum('')
    }
    else{
      const copy = {
        id: persons.length + 1,
        name: newName,
        number: newNum
      }

      noteService.create(copy).then(
        setSuccessMessage('Dog shit was created successfully'),
        setTimeout(() => {
          setSuccessMessage('')
        }, 2000)
      )

      const personVar = persons.concat(copy)
      setPersons(personVar)
      setFilteredPersons(personVar)
      setNewName('')
      setNewNum('')
    }
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter func={searchContact}/>
      <AddSuccess text={successMessage}/>
      <h2>Add new contact</h2>
      <PersonForm 
      addNote={addNote}
      newName={newName}
      setNewName={setNewName}
      newNum={newNum}
      setNewNum={setNewNum}/>

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} yeet={yeet}/>
    </div>
  )
}

export default App