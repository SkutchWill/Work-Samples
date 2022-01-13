import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PaletteList.css';
import MiniPalette from './MiniPalette';

export default function PaletteList(props) {

    const palettes = props.palettes.map(palette => (
        <MiniPalette{...palette}/>
    ));
    return (
        <div className='PaletteList'>
            <h1>React Colors</h1>
            {palettes}
        </div>
    );
}
