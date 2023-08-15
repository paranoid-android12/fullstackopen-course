import { useState } from 'react'
import Note from './components/Note'

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

const Persons = ({personsCop}) => {
  return(personsCop.map(x => <Note key={x.id} note={x}/>) )
}

const App = () => {
  const [persons, setPersons] = useState([
    {id: 1, name: 'Arto Hellas', number: '09683232409'},
    {id: 2, name: 'Chris Viacrusis', number: '09584254423'},
    {id: 3, name: 'Pigmentation', number: '09123727482'},
    {id: 4, name: 'Magicula Magic', number: '09572312342'}
  ]) 
  const[personsCop, setPersonsCop] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const searchContact = (event) => {
    if(event.target.value !== ''){
      const setUpdated = (persons.filter((x) => {return x.name.toLowerCase().includes(event.target.value.toLowerCase())}))
      setPersonsCop(setUpdated)
    }
    else{
      setPersonsCop(persons)
    }
  }

  const addNote = (event) => {
    event.preventDefault()
    const find = persons.some(x => (x.name === newName))
    
    if(find === true){
      window.alert(`${newName} ${newNum} is already added to Phonebook!`)
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
      const personVar = persons.concat(copy)
      setPersons(personVar)
      setPersonsCop(personVar)
      setNewName('')
      setNewNum('')
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter func={searchContact}/>

      <h2>Add new contact</h2>
      <PersonForm 
      addNote={addNote}
      newName={newName}
      setNewName={setNewName}
      newNum={newNum}
      setNewNum={setNewNum}/>

      <h2>Numbers</h2>
      <Persons personsCop={personsCop}/>
    </div>
  )
}

export default App