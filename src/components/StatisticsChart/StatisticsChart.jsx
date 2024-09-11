import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './StatisticsChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsChart = () => {
  const years = [2020, 2021, 2022, 2023, 2024];
  const months = ['January', 'February', 'March', 'April', 'May'];
  const categories = [
    'All',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other',
  ];

  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const expenseData = {
    2023: {
      January: [1000, 500, 2000, 300, 3000, 900, 500],
      February: [1500, 700, 1800, 500, 3300, 1100, 550],
      March: [1500, 800, 2208.5, 300, 3400, 1200, 610],
      April: [1600, 850, 2300, 350, 3100, 1300, 660],
      May: [1700, 900, 2400, 400, 3500, 1400, 710],
    },
    2022: {
      January: [900, 600, 2100, 400, 3200, 1000, 650],
      February: [1400, 650, 1700, 450, 3100, 1150, 520],
      March: [1200, 750, 2000, 300, 3300, 1250, 600],
    },
  };

  const selectedData = expenseData[selectedYear]?.[selectedMonth] || [];

  // Calculăm sumele pentru fiecare categorie
  const totalExpenses = selectedData.reduce((a, b) => a + b, 0);
  const categorySums = categories.slice(1).map((category, index) => ({
    category,
    sum: selectedData[index] || 0,
  }));

  const data = {
    labels: [
      'Car',
      'Self care',
      'Child care',
      'Household products',
      'Education',
      'Leisure',
      'Other expenses',
    ],
    datasets: [
      {
        label: `Expenses for ${selectedMonth} ${selectedYear}`,
        data:
          selectedCategory === 'All'
            ? selectedData
            : selectedData.map((val, index) =>
                categories[index + 1] === selectedCategory ? val : 0
              ),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => {
            return `₹ ${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
      afterDraw: chart => {
        const ctx = chart.ctx;
        const { width, height } = chart;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = `${fontSize}em Popins`;
        ctx.textBaseline = 'middle';
        ctx.color = 'white';

        const totalText = `₹ ${totalExpenses.toLocaleString()}`;
        const textX = Math.round(
          (width - ctx.measureText(totalText).width) / 2
        );
        const textY = height / 2;

        ctx.fillText(totalText, textX, textY);
        ctx.save();
      },
    },
    elements: {
      arc: {
        borderWidth: -1, // Îndepărtează bordura (dacă dorești)
      },
    },
    cutout: '65%', // Ajustează procentul pentru a modifica grosimea inelului
  };

  return (
    <div className={styles.container}>
      {/* Graficul este poziționat în partea stângă */}
      <div className={styles.chartSection}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Panelul de control (dropdowns și secțiuni) în partea dreaptă */}
      <div className={styles.controlPanel}>
        <h2 className={styles.title}>Statistics</h2>

        <div className={styles.dates}>
          {/* Dropdown pentru selecția anului */}
          <div className={styles.dropdown}>
            <label htmlFor="year">Year</label>
            <select
              id="year"
              value={selectedYear}
              onChange={e => setSelectedYear(parseInt(e.target.value))}
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown pentru selecția lunii */}
          <div className={styles.dropdown}>
            <label htmlFor="month">Month</label>
            <select
              id="month"
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
            >
              {months.map(month => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dropdown pentru selecția categoriei */}
        <div className={styles.dropdown}>
          <label htmlFor="category">Category Sum</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="All">All {totalExpenses.toLocaleString()}</option>
            {categorySums.map(({ category, sum }) => (
              <option key={category} value={category}>
                {category} {sum.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Secțiunea pentru Expenses */}
        <div className={styles.total}>
          <h4>Expenses: {totalExpenses.toLocaleString()}</h4>
        </div>

        {/* Secțiunea pentru Income */}
        <div className={styles.incomeSection}>
          <h3>Income</h3>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
