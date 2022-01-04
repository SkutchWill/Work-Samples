import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

export default function Navbar(props) {
    return (
        <header className='Navbar'>
            <div className='logo'>
                <a href='#'>reactcolorpicker</a>
            </div>
            <div className='slider-container'>
                <span>Level: {props.level}</span>
                <div className='slider'>
                    <Slider 
                        defaultValue={props.level} 
                        min={100} 
                        max={900} 
                        step={100} 
                        onAfterChange={props.changeLevel}
                        trackStyle={{ backgroundColor: 'transparent'}}
                        handleStyle={{ 
                            borderColor: 'green',
                            height: 13,
                            width: 13,
                            marginleft: -7,
                            marginTop: -3,
                            backgroundColor: 'green',
                            boxShadow: 'none'
                        }}
                        railStyle={{ height: 8 }}
                    />
                </div>   
            </div>
            
        </header>
    )
}
