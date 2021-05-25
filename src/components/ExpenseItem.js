import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>25ú Bealtaine</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">€296.34</div>
      </div>
    </div>
  )
}
export default ExpenseItem
