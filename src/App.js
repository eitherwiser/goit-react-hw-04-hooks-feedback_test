import './App.css';
import React from 'react';
import { useState } from 'react';
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedback/FeedbackOptions";
import Notification from "./components/notification/Notification";

export default function App() {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const onChange = (e) => {
    let type = e.target.name
    setState({
      ...state, [type]: state[type] + 1
    })
  }

  const countTotalFeedbacks = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };


  return (
    <>
      <Section title="Please leave feedback" className="feedback">
        <FeedbackOptions
          options={state}
          onChange={onChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedbacks() > 0 ? (
          <>
            <ul>
              <Statistics
                feedbacks={state}
                total={countTotalFeedbacks()}
              />
            </ul>
          </>
        ) : (
          <Notification message="There are no feedbacks here yet." />
        )}
      </Section>
    </>
  );
}
