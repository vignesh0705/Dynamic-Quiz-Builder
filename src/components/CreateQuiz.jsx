import React, { useState } from 'react';

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([{
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  }]);

  const handleCreateQuiz = (e) => {
    e.preventDefault();
    // Quiz creation logic here
  };

  return (
    <div className="create-quiz-container">
      <h2>Create a New Quiz</h2>
      <form onSubmit={handleCreateQuiz}>
        <input 
          type="text" 
          placeholder="Quiz Title" 
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)} 
          required 
        />
        
        {questions.map((q, index) => (
          <div key={index} className="question-section">
            <h4>Question {index + 1}</h4>
            <input 
              type="text" 
              placeholder="Question Text" 
              value={q.question} 
              onChange={(e) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].question = e.target.value;
                setQuestions(updatedQuestions);
              }} 
              required 
            />
            {q.options.map((option, idx) => (
              <input 
                key={idx} 
                type="text" 
                placeholder={`Option ${idx + 1}`} 
                value={option}
                onChange={(e) => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[index].options[idx] = e.target.value;
                  setQuestions(updatedQuestions);
                }} 
                required 
              />
            ))}
            <input 
              type="text" 
              placeholder="Correct Answer" 
              value={q.correctAnswer}
              onChange={(e) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].correctAnswer = e.target.value;
                setQuestions(updatedQuestions);
              }} 
              required 
            />
          </div>
        ))}
        
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
