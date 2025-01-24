import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TeacherSignup from "./components/TeacherSignup";
import StudentSignup from "./components/StudentSignup";
import Login from "./components/Login";
import JoinQuiz from "./components/JoinQuiz";
import CreateQuiz from "./components/CreateQuiz";
import QuizInterface from "./components/QuizInterface";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher-signup" element={<TeacherSignup />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join-quiz" element={<JoinQuiz />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/quiz/:quizCode" element={<QuizInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
