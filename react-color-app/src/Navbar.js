import React, { useState } from 'react';
import { IconButton, MenuItem, Select, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

export default function Navbar(props) {

    const [format, setFormat ] = useState('hex');

    const [open, setOpen] = useState(false);

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
        setOpen(true);
        props.handleChange(e.target.value);
    }

    const closeSnackBar = () => {
        setOpen(false);
    }

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
            <div className='select-container'>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value='hex'>Hex - #fff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb( 255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba( 255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar 
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                open={open}
                autoHideDuration={3000}
                message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                onClose={closeSnackBar}
                action={[
                    <IconButton 
                        onClick={closeSnackBar} 
                        color='inherit' 
                        key='close' 
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
                />
        </header>
    )
}
