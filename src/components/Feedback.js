import React from 'react';
import Button from './Button';
import Status from './Status';
import Notification from './Notification'

class Feedback extends React.Component{
  state = {
  good: this.props.good,
  neutral: this.props.neutral,
  bad: this.props.bad
    }

    onGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    }
    
    onNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
    }
    
    onBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
    }

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage() {
        return this.state.good === 0
      ? "0"
      : Math.round((this.state.good * 100) / this.countTotalFeedback()) + "%";
  }    
    
    render() {
        return (
            <>
            <Button
                    onGood={this.onGood}
                    onNeutral={this.onNeutral}
                    onBad={this.onBad}
                />
                {this.countTotalFeedback() ? (
            <Status
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positiveFeedback={this.countPositiveFeedbackPercentage()}
                />
        ) : (
            <Notification message="No feedback given"></Notification>
        )}
           </>     
        )
    }
}

export default Feedback