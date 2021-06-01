import Chart from '../Chart/Chart'
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Ean', value: 0 },
    { label: 'Fea', value: 0 },
    { label: 'Már', value: 0 },
    { label: 'Aib', value: 0 },
    { label: 'Bea', value: 0 },
    { label: 'Mei', value: 0 },
    { label: 'Lúi', value: 0 },
    { label: 'Lún', value: 0 },
    { label: 'Meá', value: 0 },
    { label: 'Dei', value: 0 },
    { label: 'Sam', value: 0 },
    { label: 'Nol', value: 0 },
  ]
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth() // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount
  }
  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart
