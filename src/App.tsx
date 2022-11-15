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
      
    </div>
  );
}

export default App;
