import React, { useState } from 'react';
import './Enqueue.css';

function Enqueue(props) {
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    }

    const enqueue = () => {
        if(input.length > 3){
            props.onEnqueue(input);
            setInput('');
        }
    }

    return (
        <div>
            <div className="section-header-container">
                <div className="section-header">Enqueue</div>
            </div>
            <div className="section-content-container">
                <button className="enqueue-btn" onClick={enqueue}>Enqueue</button>
                <input type="text" className="enqueue-input" value={input} onChange={inputHandler}></input>
            </div>
        </div>
    );
}

export default Enqueue;