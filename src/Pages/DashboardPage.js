import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import StatisticsPage from '../Pages/StatisticsPage';

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
        </ul>
      </nav>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Routes>
    </div>
  );
};

export default DashboardPage;
