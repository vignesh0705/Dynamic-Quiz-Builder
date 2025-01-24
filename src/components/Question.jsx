import React, { useState } from 'react';

const Question = ({ question, index, onAnswerChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
    onAnswerChange(index, e.target.value);
  };

  return (
    <div className="question">
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option, i) => (
          <label key={i}>
            <input
              type="radio"
              name={`question-${index}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
