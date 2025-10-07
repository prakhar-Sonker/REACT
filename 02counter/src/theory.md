// react code with the help of hooks
function App(){
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
    setCounter(counter+1)
    // console.log("clicked", counter);
  }
  const removeValue = ()=>{
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
