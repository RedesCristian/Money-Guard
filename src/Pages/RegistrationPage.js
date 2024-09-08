import React, { useState, useCallback } from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.jsx';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';

function RegistrationPage() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = useCallback(newPassword => {
    setPassword(newPassword);
  }, []);

  return (
    <div className="registration-page">
      <h1>Money Guard</h1>

      <RegistrationForm
        password={password}
        onPasswordChange={handlePasswordChange}
      />

      <PasswordStrengthBar password={password} />
    </div>
  );
}

export default RegistrationPage;
