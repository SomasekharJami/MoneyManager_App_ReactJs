import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expense} = props

  return (
    <ul className="secondCon">
      <li className="firLi balList">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="listImg"
        />
        <div className="textCon">
          <p className="firLiP">Your Balance</p>
          <p className="firLiH" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </li>
      <li className="firLi inList">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="listImg"
        />
        <div className="textCon">
          <p className="firLiP">Your Income</p>
          <p className="firLiH" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </li>
      <li className="firLi expList">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="listImg"
        />
        <div className="imgSep">
          <p className="firLiP">Your Expenses</p>
          <p className="firLiH" data-testid="expensesAmount">
            Rs {Expense}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
