import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

function App(props) {

  let params = useParams();

  const findPallete = (id) => {
      return props.palettes.find(palette => palette.id === id);
  }
  return (
    <div className="App">
      <Palette palette={generatePalette(findPallete(params.id))}/>
    </div>
  );
}

export default App;
