import { useState } from "react";


function App(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  return(
    // 1st div for full screeen
     <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
      {/* 2nd div for small box */}
       <div className="p-8 rounded-xl shadow-2xl w-full max-w-sm transition-colors duration-500"
      // Inline styles are also dynamically set based on the state.
         style={{ backgroundColor: isDarkMode ? '#374151' : 'white', color: isDarkMode ? 'white' : '#1f2937' }}>
          <h1 className="text-2xl font-bold mb-8 text-center">Settings Toggle</h1>
          {/* 3rd div ye 2nd div k andr hai for enable dark mode likhne k liye aur yha pr hi checkbox lgyenge */}
          <div className="flex items-center justify-between p-4 border rounded-lg transition-colors duration-500"
          style={{ borderColor: isDarkMode ? '#4b5563' : '#e5e7eb', backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb' }}>
          <label htmlFor="darkModeToggle" className="text-lg font-medium">Enable Dark Mode</label>
          <input
          type="checkbox"
          id="darkModeToggle"
          className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
          checked={isDarkMode}
                        
                        // Updates the state by grabbing the boolean (true/false) status of the checkbox
                        onChange={(e) => setIsDarkMode(e.target.checked)}
          />
          {/* 3. The display shows the current mode status dynamically */}
                <div className="mt-6 text-center text-sm font-light">
                    Current Mode: <span className="font-bold">{isDarkMode ? "Dark" : "Light"}</span>
                </div>
          </div>
         </div>
     </div>
  )
}

export default App;