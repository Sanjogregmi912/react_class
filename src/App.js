// import { useState } from 'react';
import './App.css';

// import Feedback_app  from './components/Feedback_app';
import History_app from './components/History_app';


function App({name,age}) {

  
  // const [counter,setCounter]= useState(0)

  // const handleCounter = () =>{
  //   setCounter(counter+1)
  // }


  return (
    <>
   
   {/* <h2>{counter}</h2>
   <button onClick={handleCounter}>Plus</button> */}
   {/* <Feedback_app/> */}
   <History_app/>

    </>
    

  );
}

export default App;
