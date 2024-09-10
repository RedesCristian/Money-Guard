import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage';
import Dashboard from '../Pages/DashboardPage';
import CurrencyPage from '../Pages/CurrencyPage/CurrencyPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/Money-Guard"
          element={<Navigate to="/Money-Guard/login" />}
        />
        <Route path="currency" element={<CurrencyPage />} />
        <Route path="/Money-Guard/register" element={<RegistrationPage />} />
        <Route path="/Money-Guard/login" element={<LoginPage />} />
        <Route path="/Money-Guard/dashboard/*" element={<Dashboard />} />{' '}
      </Routes>
    </div>
  );
};
