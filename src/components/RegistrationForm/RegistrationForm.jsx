import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();

  const handleRegisterClick = e => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <form>
      <label>Email</label>
      <input type="email" />

      <label>Password</label>
      <input type="password" />

      <label>Confirm Password</label>
      <input type="password" />

      <button type="submit">REGISTER</button>
      <button type="submit" onClick={handleRegisterClick}>
        LOG IN
      </button>
    </form>
  );
}

export default RegistrationForm;
