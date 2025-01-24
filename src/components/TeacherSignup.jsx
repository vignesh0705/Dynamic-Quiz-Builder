import React, { useState } from 'react';

const TeacherSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2>Teacher Signup</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default TeacherSignup;
