import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/create-quiz">Create Quiz</Link></li>
        <li><Link to="/join-quiz">Join Quiz</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
