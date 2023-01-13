import { useState } from "react";


function App1(props) {


    
    const [phonebook,setphonebook] =  useState(props.phonebook)
    const [name, setname] =  useState("")
    const [number,setnumber] = useState("")
    const [search ,setsearch] = useState("")
  

    const handlesearch = (event) =>{
        console.log(event.target.value)
        setsearch(event.target.value)
    }

    

  
    const handleInputnumberChange = (event) =>{
        console.log(event.target.value)
        
        setnumber(event.target.value)
        
    }
    const handleInputnameChange = (event) =>{
        console.log(event.target.value)
        setname(event.target.value)
    }

    const HandleAdd = (event) =>{
        event.preventDefault()
        const phonenumber = {
            id : phonebook.lenght + 1,
            name : name,
            number : number,
            important : true,
        }
        
        if(name !== "" || number !== "") setphonebook(phonebook.concat(phonenumber))
      
    }
    return (
        <>
        <h2> phonebook</h2>

        <form>
            <input onChange = {handlesearch} />
            
            <ul>
                {phonebook.filter(phone => phone.name.toLowerCase().includes(search))
                .map(phone => <li key = {phone.id}><p> <li> {phone.name}</li><li>{phone.number}</li></p> </li>)}
            </ul>

        </form>

        <form>
          <h5 >name</h5><input value ={name} onChange ={handleInputnameChange}/>
          <h5 >number</h5><input value= {number} onChange = {handleInputnumberChange}/>
          <button onClick={HandleAdd}>Add</button>
            
        </form>
        <h2>Numbers </h2>
        <ul>
            {phonebook.map(phone => <p><li key = {phone.id}>  {phone.name}  {phone.number}</li> </p>   )}
        </ul>
        </>


    )
}

export default  App1;