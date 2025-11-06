import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

//Step1: create context
const UserContext = createContext();
// Step2: wrap all the child inside a provider
// step3: pass value--> sbse phle value create krlo fir pass krdo
// step4: consumer k andr jaake consume krlo
 

function App() {

  const [ user, setUser] = useState({name: "Prakhar"}); 
  return (
    <>
    <UserContext.Provider value={user}>
      <div>
        <ChildA />
      </div>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
