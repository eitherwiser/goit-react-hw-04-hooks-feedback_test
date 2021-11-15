import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({feedbacks, total}) {
  
  const { good, neutral, bad } = feedbacks;

  const positiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  }
  
    const textColor = `rgba(
    ${200 - positiveFeedbackPercentage()},
    ${positiveFeedbackPercentage() + 50},
    50,
    ${((neutral / total) * 100) > 60
      ? 0.4
        : ((neutral / total) * 100) > 10
        ? 1 - ((neutral / total) * 100) * 0.01
          : 1
    })`;
  
  return (

    <>
    <ul className={s.list}>
        <li className={s.good}>
          <span>
              {good} {" "}
          </span>
          <span className="material-icons">
          sentiment_satisfied 
          </span>
      </li>

        <li className={s.neutral}>
          <span>
              {neutral} {" "}
          </span>
          <span className="material-icons">
            sentiment_neutral 
          </span>

      </li>

        <li className={s.bad}>
          <span>
            {bad} {" "}
          </span>
          <span className="material-icons">
            sentiment_dissatisfied 
          </span>
      </li>

      </ul>
      {
        good === total
          ? <p style={{color: textColor}}><span>{positiveFeedbackPercentage()}%</span> positive!</p>
          : good === 0
            ? <p style={{color: textColor}} > There are no positive feedbacks here.</p>
            : <p style={{color: textColor}} ><span>{positiveFeedbackPercentage()}%</span> feedbacks are positive of total <span>{total}</span>.</p>
      }
      </>
  );

}

Statistics.propTypes = {
  feedbacks: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
};