import React, { useState } from 'react';

const StudentSignup = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const validatePassword = () => {
    if (studentData.password !== studentData.confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return false;
    }

    if (studentData.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }

    if (!/[A-Z]/.test(studentData.password)) {
      setErrorMessage('Password must contain at least one uppercase letter.');
      return false;
    }

    if (!/[0-9]/.test(studentData.password)) {
      setErrorMessage('Password must contain at least one number.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      alert('Student account created successfully!');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Student Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={studentData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={studentData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={studentData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={studentData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default StudentSignup;
