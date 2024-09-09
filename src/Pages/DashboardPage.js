import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import StatisticsPage from '../Pages/StatisticsPage';
import ModalAddTransaction from 'components/AddTransactionForm/AddTransactionForm';
import CurrencyPage from './CurrencyPage/CurrencyPage';

const DashboardPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="statistics">Statistics</Link>
          </li>
          <li>
            <Link to="currency">Currency</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="currency" element={<CurrencyPage />} />
      </Routes>
      <div>
        <ModalAddTransaction />
      </div>
    </div>
  );
};

export default DashboardPage;
