import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.jsx';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
// import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="registration-page">
      <h1>Money Guard</h1>
      <RegistrationForm />
      <PasswordStrengthBar />
    </div>
  );
}

export default RegistrationPage;
