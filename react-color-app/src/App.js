import React from 'react'
import './App.css';
import { Route, Routes, Outlet, useParams } from 'react-router-dom';
import Palette from './Palette';
import { seedColors } from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {

  let params = useParams();

  const findPallete = (id) => {
      return seedColors.find(palette => palette.id === id);
  }
  return (
    <div className="App">
      <Palette palette={generatePalette(findPallete(params.id))}/>
    </div>
  );
}

export default App;
