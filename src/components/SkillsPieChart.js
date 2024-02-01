// SkillsPieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function SkillsPieChart() {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    // Create chart instance
    const ctx = chartRef.current.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Java'], // Example skill labels
        datasets: [{
          data: [20, 15, 25, 10, 15, 15], // Example skill values (percentages)
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#4bc0c0', '#9966ff'], // Example colors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    // Cleanup function
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="skills-pie-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default SkillsPieChart;
