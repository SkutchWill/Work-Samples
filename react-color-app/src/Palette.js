import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Palette(props) {

    const [ level, setLevel ] = useState(500);

    const colorBoxes = props.palette.colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name}/>));

    const changeLevel = (value) => {
        setLevel(value);
    }
    return (
        <div className='Palette'>
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel}/>
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            {/* footer goes here */}
        </div>
    );
}
