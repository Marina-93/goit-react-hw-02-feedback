import React from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Status from './components/Status';
import Notification from './components/Notification';

class App extends React.Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
    
  leaveFeedback(e) {
    this.setState((prevState) => {
      return { [e]: prevState[e] + 1 }
    })
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
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback.bind(this)} />
        </Section>
        <Section title="Statistics" />
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
        )}}

export default App