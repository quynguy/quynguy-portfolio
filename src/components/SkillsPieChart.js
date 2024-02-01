import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function SkillsPieChart() {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    // chart instance
    const ctx = chartRef.current.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React'], //  skill labels
        datasets: [{
          data: [100, 100, 75, 75, 75, 75], // skill values (percentages)
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#4bc0c0', '#9966ff'], 
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
