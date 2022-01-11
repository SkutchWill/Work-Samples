import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PaletteList.css';

export default function PaletteList(props) {

    const palettes = props.palettes.map(palette => (
        <Link to={`palette/${palette.id}`}>{palette.paletteName}</Link>
    ));
    return (
        <div className='PaletteList'>
            <h1>React Colors</h1>
            {palettes}
        </div>
    );
}
