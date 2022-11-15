import React, { useState } from 'react';
import './App.css';

type TPoint = {
  x: number;
  y: number;
};


function App() {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoints([...points, {
      x: clientX,
      y: clientY,
    } ]);
  }

  function handleUndo() {
    // Remove last set Point
    // Check that the array isn't empty to avoid crashes
    
      const newPoints = [...points];
      const poppedPoint = newPoints.pop();

      if (!poppedPoint) return;
      setPopped([...popped, poppedPoint]);
      setPoints(newPoints);
    
  }

  function handleRedo() {
    // Copy the Array popped to a newPopped
    // The Pop the poppedPoint to newPopped.
      const newPopped = [...popped];
      const poppedPoint = newPopped.pop();
    // Make sure the array isn't empty to avoid crash
      if (!poppedPoint) return;
      // Set the popped point back to popped array.
      setPoints([...points, poppedPoint]);
      setPopped(newPopped);

  }


  return (
    <>
    <div className="top">
      <button className="buttons" disabled={points.length === 0} onClick={handleUndo}>Undo</button>
      <button className="buttons" disabled={popped.length === 0} onClick={handleRedo}>Redo</button>
    </div>
    
    <div className="App" onClick={handlePlaceCircle}>

      

      {points.map((point, idx) => ( 
      <div
        key={idx}
        className="point" style= {{
        left: point.x  - 3 + "px",
        top: point.y - 3 + "px", 
      }}>
      
      </div>))}
    </div>
    </>
  );
}

export default App;
