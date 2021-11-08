import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
    onBad: PropTypes.func
}

export default Button;