import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type TPoint = {
  x: number;
  y: number;
};


function App() {
  const [points, setPoints] = useState<TPoint[]>([]);

  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoints([...points, {
      x: clientX,
      y: clientY,
    } ]);
  }

  


  return (
    <div className="App" onClick={handlePlaceCircle}>
      {points.map(point => ( <div className="point" style= {{
        left: point.x  - 3 + "px",
        top: point.y - 3 + "px", 
      }}>
      
      </div>))}
    </div>
  );
}

export default App;
