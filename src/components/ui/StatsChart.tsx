import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function StatsChart() {
  const data = {
    labels: ['July','Sep','Oct','Nov','Dec','Jan'],
    datasets: [
      { label: 'Income', data: [17000, 5000, 12000, 14000, 11000, 17000], backgroundColor: '#F97316' },
      { label: 'Expenses', data: [5000, 15000, 10000, 13000, 17000, 11000], backgroundColor: '#9CA3AF' },
    ],
  };

  return <Bar data={data} />;
}
