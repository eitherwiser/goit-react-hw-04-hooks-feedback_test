import React from 'react';
import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ options, onChange }) {

  return (
    <ul className={s.feedbackList}>
      {Object.getOwnPropertyNames(options).map(key => ( 
            <li key={key}>
              <button className={s.btn}
                type="button"
                name={key}
                onClick={onChange}
                >
                {key.toUpperCase()}
              </button>
            </li>
      ))}
    </ul>
  )
}



FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func,
}


