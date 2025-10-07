import { useState } from "react";

function App(){

  const [real, setReal] = useState('')

  return(

    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Real-time Text Mirror
        </h1>
          <input
          type='text'
          placeholder="Start typing here..."
          className="w-full p-3 mb-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-150"
          value={real}
          onChange={(e) => {setReal(e.target.value)}}
          />
          <p className="text-xl font-semibold text-gray-700 mb-2">
                    Live Output:
          </p>
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200 min-h-[50px]">
            <span className="text-indigo-800">
              {real}
            </span>
          </div>
      </div>
    </div>
  )
}

export default App;