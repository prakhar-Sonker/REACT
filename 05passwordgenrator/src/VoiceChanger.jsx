import React, { useState } from 'react';

// The main component that gets rendered
const App = () => {

    // 1. STATE: Holds the current volume number (starting at 1)
    const [volume, setVolume] = useState(1);
    
    return (
        <div className="min-h-screen bg-amber-600 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
                    Volume Controller Practice
                </h1>

                {/* Container for the slider and label, using flex for clean alignment */}
                <div className="flex items-center justify-between gap-x-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    
                    {/* 2. INPUT: The Slider */}
                    <input
                        type='range'
                        min={0}
                        max={50}
                        // 🔑 Sets the slider position based on the current 'volume' state
                        value={volume}
                        className='cursor-pointer w-full h-2 bg-amber-200 rounded-lg appearance-none'
                        
                        // 🔑 3. ON CHANGE: This function runs when the slider moves
                        onChange={(e) => {
                            // *** CRITICAL FIX: Use the setter function (setVolume) ***
                            // The value of e.target.value is always a string from the input,
                            // but JS handles the comparison fine for range inputs.
                            setVolume(e.target.value);
                        }}
                    />
                    
                    {/* 4. LABEL: Dynamically displays the current state value */}
                    <label className='font-semibold text-lg text-amber-700 min-w-max'>
                        Volume: <span className="font-extrabold">{volume}</span>
                    </label>
                </div>
                
                <div className="mt-6 text-sm text-gray-500 italic text-center">
                    (Max volume set to 50 for this practice exercise)
                </div>
            </div>
        </div>
    );
};

export default App;
