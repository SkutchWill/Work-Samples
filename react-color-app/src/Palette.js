import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';
import Navbar from './Navbar';


export default function Palette(props) {

    const [ level, setLevel ] = useState(500);

    const colorBoxes = props.palette.colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name}/>));

    const changeLevel = (value) => {
        setLevel(value);
    }
    return (
        <div className='Palette'>
            <Navbar level={level} changeLevel={changeLevel}/>         
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            {/* footer goes here */}
        </div>
    );
}
