import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Status = ({good,neutral,bad,total,positiveFeedback}) => (
    <>
        <h2>Statistics</h2>
        <p>Good:<span className="span">{good}</span></p>
        <p>Neutral:<span className="span">{neutral}</span></p>
        <p>Bad:<span className="span">{bad}</span></p>
        <p>Total:<span className="span">{total}</span></p>
        <p>Positive feedback:<span className="span">{positiveFeedback}</span></p>
    </>
)

Status.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.string
}

export default Status;