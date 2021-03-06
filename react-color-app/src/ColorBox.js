import  React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './styles/ColorBox.css';

export default function ColorBox(props) {
    const { name, background, singleUrl } = props;
    const [copied, setCopy] = useState(false);

    const changeCopyState = () => {
        setCopy(true);
        setTimeout(() => {setCopy(false)}, 1500);
    }
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className='ColorBox'>
                <div style={{ background }} className={`copy-overlay ${copied && 'show'}`}/>
                <div className={`copy-message ${copied && 'show'}`}>
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <Link to={singleUrl} onClick={e => e.stopPropagation()}>
                    <span className='see-more'>More</span>
                </Link>
            </div>
        </CopyToClipboard>
    );
}
