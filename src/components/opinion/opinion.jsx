import React from "react";
import css from './opinion.module.css'

export const Opinion = ({ leaveOpinion }) => {
    return (
        <div className={css.wrap}>
            <button className={css.opinion} type="button" onClick={() => leaveOpinion('good')}>
                <span className={css.emoji} role="img" aria-label="smiling face">&#x1F604;</span>
            </button>
            <button className={css.opinion} type="button" onClick={() => leaveOpinion('neutral')}>
                <span className={css.emoji} role="img" aria-label="neutral face">&#x1F610;</span>
            </button>
            <button className={css.opinion} type="button" onClick={() => leaveOpinion('bad')}>
                <span className={css.emoji} role="img" aria-label="sad face">&#x1F614;</span>
            </button>
        </div>
    );
}


