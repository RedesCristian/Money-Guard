// Example in LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Money-Guard/dashboard/home'); // Include the basename here
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email</label>
      <input type="email" />

      <label>Password</label>
      <input type="password" />

      <button type="submit">LOG IN</button>

      {/* Buton pentru Register */}
      <button type="button" onClick={() => navigate('/Money-Guard/register')}>
        REGISTER
      </button>
    </form>
  );
}

export default LoginPage;
