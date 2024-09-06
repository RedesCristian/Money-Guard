import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleRegisterClick = e => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <form>
      <label>Email</label>
      <input type="email" />

      <label>Password</label>
      <input type="password" />

      <button type="submit">LOG IN</button>

      {/* Buton pentru Register */}
      <button type="button" onClick={handleRegisterClick}>
        REGISTER
      </button>
    </form>
  );
}

export default LoginForm;
