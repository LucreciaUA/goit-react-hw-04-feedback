import React, { useState } from "react";
import { Component } from "react";
import css from './feedback.module.css'
import { Statistics } from "./statistic/statistic";
import { Opinion } from "./opinion/opinion";
import { Section } from "./section/section";


const Feedback =() => {


  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

   const leaveOpinion = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
    }

    const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

      return (<div className={css.feedback}>
        <h1>Leave your feedback</h1>
        <Section title={'Please leave your feedback'} />
        <Opinion
          good={good}
          neutral={neutral}
          bad={bad}
          leaveOpinion={leaveOpinion} />
        <Section title={'Statistics'}/>
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage} />
            </div>
            
        )
    }



export default Feedback;