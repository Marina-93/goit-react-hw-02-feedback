import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class FeedbackOptions extends React.Component {
  render() {
    return (
      <>
        <button
          type="button"
          className="button"
          onClick={() => this.props.onLeaveFeedback("good")}
        >
          Good
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.props.onLeaveFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.props.onLeaveFeedback("bad")}
        >
          Bad
        </button>
      </>
    )
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
};
export default FeedbackOptions;