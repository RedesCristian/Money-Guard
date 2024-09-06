import React from 'react';
import { StatisticsChart } from '../components/StatisticsChart/StatisticsChart.jsx';
import { StatisticsDashboard } from '../components/StatisticsDashboard/StatisticsDashboard.jsx';
import { StatisticsTable } from '../components/StatisticsTable/StatisticsTable.jsx';

const StatisticsPage = () => {
  return (
    <div>
      <StatisticsChart />
      <StatisticsTable />
      <StatisticsDashboard />
    </div>
  );
};

export default StatisticsPage;
