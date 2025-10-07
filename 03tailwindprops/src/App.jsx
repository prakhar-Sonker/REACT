import { useState } from "react"


function App() {
  const [color, setColor] = useState("red")

  return (
    // error screen full kr di thi aur width 100 di thi jb content nhi hota to percent me nhi dete height ya width
    <div className={`w-screen h-screen duration-200 bg-amber-600 `} 
    style={{
      backgroundColor : color
    }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => {
            console.log("hellooo")
            
            setColor("red")
            console.log(color)
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App