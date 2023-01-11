
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [newNote,setNewNote] = useState(' ')
  const [notes,setnotes] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/notes").then((response)=>{
      console.log(response)
      setnotes(response.data)
    })
},[])

  const handleInputChange = (event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const HandleAdd = (event) =>{
    event.preventDefault()
    alert("Testing... ")
  }


  return (
    <>
   
      <h2>Notes</h2>
      <ul>
        {notes.map(note => <li key = {note.id}><p>{note.content}</p> <p>{note.date}</p></li>)}
        
      </ul>
      <form>
        <input value = {newNote} onChange = {handleInputChange}/> 
        <button onClick={HandleAdd}> add </button>
      </form>

    </>
    

  );
}

export default App;
