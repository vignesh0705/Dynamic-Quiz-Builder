import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Dynamic Quiz Builder</h1>
      <p>Create, Join, and Take Quizzes with ease</p>
      <Link to="/login" className="btn-primary">Get Started</Link>
    </div>
  );
};

export default Home;
