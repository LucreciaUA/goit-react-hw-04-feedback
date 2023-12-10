import React from "react";
import { Component } from "react";
import css from './feedback.module.css'


class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    leaveOpinion = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
    }

    render() {
      return (<div className={css.feedback}>
            <h1>Leave your feedback</h1>
            <div className={css.wrap}>
                <button className={css.opinion} type="button" onClick={()=>this.leaveOpinion('good')}>
                 <span className={css.emoji} role="img" aria-label="smiling face">&#x1F604;</span>
              </button>
              
            <button className={css.opinion} type="button" onClick={()=>this.leaveOpinion('neutral')}>
             <span lassName={css.emoji} role="img" aria-label="neutral face">&#x1F610;</span>
              </button>
              
            <button className={css.opinion} type="button" onClick={()=>this.leaveOpinion('bad')}>
             <span lassName={css.emoji} role="img" aria-label="sad face">&#x1F614;</span>
              </button>
              
            </div>
            {this.state.good+this.state.neutral+this.state.bad>0 && <div className="stats">
                <h2>Statistics</h2>
                <div className="container">
                    <ul className="stats">
                        <li className={css.list}>good: <span>{this.state.good}</span></li>
                        <li className={css.list}>neutral: <span>{this.state.neutral}</span></li>
                        <li className={css.list}>bad: <span>{this.state.bad}</span></li>
                    </ul>
                    <h4>All: <span>{this.state.good+this.state.neutral+this.state.bad}</span></h4>
                </div>
            </div>}
        </div>)
    }

}

export default Feedback;