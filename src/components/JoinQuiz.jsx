import React, { useState } from "react";

function JoinQuiz() {
  const [quizCode, setQuizCode] = useState("");

  const handleJoinQuiz = (e) => {
    e.preventDefault();
    alert(`Joined quiz with code: ${quizCode}`);
  };

  return (
    <div>
      <h2>Join a Quiz</h2>
      <form onSubmit={handleJoinQuiz}>
        <input
          type="text"
          placeholder="Enter Quiz Code"
          value={quizCode}
          onChange={(e) => setQuizCode(e.target.value)}
          required
        />
        <button type="submit">Join Quiz</button>
      </form>
    </div>
  );
}

export default JoinQuiz;
