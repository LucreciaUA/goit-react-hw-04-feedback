import React from "react";
import css from './statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, percentage }) => {


    return (
        <>
            {total > 0 && (
                <div className="stats">
                    <div className="container">
                        <ul className="stats">
                            <li className={css.list}>good: <span>{good}</span></li>
                            <li className={css.list}>neutral: <span>{neutral}</span></li>
                            <li className={css.list}>bad: <span>{bad}</span></li>
                        </ul>
                        <h4>All: <span>{total}</span></h4>
                        <h4>Positive feedback: <span>{percentage}%</span></h4>
                    </div>
                </div>
            )}
        </>
    );
}


