import React from "react";
import css from './opinion.module.css'

export const Opinion = ({leaveOpinion }) => {
    
    const opinions = {
        good: '😊',
        neutral: '😐',
        bad: '😔'
    };
    
    return (
        <div className={css.wrap}>
           {/*<button className={css.opinion} type="button" id={opinions[0]} onClick={() => leaveOpinion('good')}>
                <span className={css.emoji} role="img" aria-label="smiling face">&#x1F604;</span>
            </button>
            <button className={css.opinion} type="button" onClick={() => leaveOpinion('neutral')}>
                <span className={css.emoji} role="img" aria-label="neutral face">&#x1F610;</span>
            </button>
            <button className={css.opinion} type="button" onClick={() => leaveOpinion('bad')}>
                <span className={css.emoji} role="img" aria-label="sad face">&#x1F614;</span>
            </button>}*/}
            {Object.keys(opinions).map((key) => (
                <button
                    key={key}
                    className={css.opinion}
                    type="button"
                    onClick={() => leaveOpinion(key)}
                >
                    <span className={css.emoji} role="img" aria-label={`${key} face`}>
                        
                    </span>
                    {key === 'good' && '😊'}
                    {key === 'neutral' && '😐'}
                    {key === 'bad' && '😔'}
                </button>
            ))}
        </div>
    );
}


