import React from "react";
import css from './statistics.module.css'

export const Statistics = ({ feedback }) => {
    const { good, neutral, bad, total, positivePercentage } = feedback;

    return (
        <>
            {total > 0 && (
                <div className="stats">
                    <h2>Statistics</h2>
                    <div className="container">
                        <ul className="stats">
                            <li className={css.list}>good: <span>{good}</span></li>
                            <li className={css.list}>neutral: <span>{neutral}</span></li>
                            <li className={css.list}>bad: <span>{bad}</span></li>
                        </ul>
                        <h4>All: <span>{total}</span></h4>
                        <h4>Positive feedback: <span>{positivePercentage}%</span></h4>
                    </div>
                </div>
            )}
        </>
    );
}


