import React from 'react';
import './styles.css'

const Button = ({onGood, onNeutral, onBad}) => (
    <div>
        <h2>Please leave feedback</h2>
        <button
            type="button" onClick={ onGood }>
            Good
        </button>
        <button
            className ="button"
            type="button" onClick={ onNeutral }>
            Neutral
        </button>
        <button
            type="button" onClick={ onBad }>
            Bad
        </button>
    </div>
);

export default Button;