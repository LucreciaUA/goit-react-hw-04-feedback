import React from "react";
import { Component } from "react";
import css from './feedback.module.css'
import { Statistics } from "./statistic/statistic";
import { Opinion } from "./opinion/opinion";
import { Section } from "./section/section";


class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }

    leaveOpinion = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }), () => {
      this.countTotalFeedback();
      
    });
    }

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total }, this.countPositiveFeedbackPercentage);
  };
    

    countPositiveFeedbackPercentage = () => {
        const { good, total } = this.state;
        const percentage = total > 0 ? (good / total) * 100 : 0;
        const positivePercentage = percentage.toFixed(0);
        this.setState({ positivePercentage });
    }

    render() {
      return (<div className={css.feedback}>
        <h1>Leave your feedback</h1>
        <Section title={'Please leave your feedback'} />
        <Opinion
          opinions={this.state}
          leaveOpinion={this.leaveOpinion} />
        <Section title={'Statistics'}/>
        <Statistics feedback={this.state} />
            </div>
            
        )
    }

}

export default Feedback;