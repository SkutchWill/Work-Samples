import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { seedColors } from './seedColors';
import App from './App';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors}/>}/>
        <Route path='/palette/:paletteId' element={<App palettes={seedColors}/>}/>
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette palettes={seedColors}/>}/>
        <Route path='*' element={<h1>Oops! There is nothing here</h1>}/>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
