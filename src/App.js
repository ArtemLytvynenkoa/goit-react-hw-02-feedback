import { Component } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGetFeedback = (feedback) => {
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1
    }))
  }

  countTotalFeedback = () => {
    const {bad, neutral, good} = this.state;
    return bad + neutral + good;
  }

  countPositiveFeedbackPercentage = () => {
    return `${Number.parseInt(this.countTotalFeedback() !== 0 ?
      (100 / this.countTotalFeedback() * this.state.good) : 0)}%`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const optionsArray = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsArray}
            onLeaveFeedback={this.handleGetFeedback}
          />
        </Section>

        <Section title="Statistics">
          {bad !== 0 || neutral !== 0 || good !== 0 ? 
           <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
          <Notification message="There is no feedback!"></Notification>
          }
        </Section>
      </> 
    )
  }
}

export default App;
