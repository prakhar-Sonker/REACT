import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   let counter = 5;
//   const addValue = () => {
//     // console.log("value added", Math.floor(Math.random()*10));
//     counter+=1;
//     console.log(counter)
//   }
//   const removeValue = () =>{
//     // console.log("value removed", counter-=1)
//     if(counter==0) console.log("Counter is 0");
//     counter-=1
//     console.log(counter) 
//   }

//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter Value: {counter} </h2>

//       <button 
//       onClick={addValue}
//       >Add Value</button>
//       <br/>
//         {/* //close tag lgana imp hai */}
//       <button
//       onClick={removeValue}
//       >Remove Value</button>

//     </>
//   )
// }

// react code with the help of hooks
function App(){
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
    if(counter>=20) return;
    setCounter(counter+1)
    // console.log("clicked", counter);
  }
  const removeValue = ()=>{
    if(counter<=0) return; 
    setCounter(counter-1)
    // console.log("clicked", counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
     <h2>Counter Value: {counter} </h2>
     <button 
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value</button> 
    </>
  )
}

export default App
