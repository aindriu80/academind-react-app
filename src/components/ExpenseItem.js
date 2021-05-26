import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('ga-ie', { month: 'long' })
  const year = props.date.getFullYear()
  const day = props.date.toLocaleString('ga-ie', { day: '2-digit' })
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
    </div>
  )
}
export default ExpenseItem
