import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    mainList: [],
    type: transactionTypeOptions[0].displayText,
    Balance: 0,
    Income: 0,
    Expense: 0,
    name: '',
    amount: '',
  }

  onSelect = event => {
    this.setState({type: event.target.value})
  }

  onAdding = event => {
    event.preventDefault()
    const {type, name, amount} = this.state
    const newList = {
      id: uuidv4(),
      Title: name,
      Amount: parseInt(amount),
      Type: type,
    }
    this.setState(prevState => ({
      mainList: [...prevState.mainList, newList],
      Balance:
        type === 'Income'
          ? prevState.Balance + amount
          : prevState.Balance - amount,
      Income: type === 'Income' ? prevState.Income + amount : prevState.Income,
      Expense:
        type === 'Income' ? prevState.Expense : prevState.Expense + amount,
      name: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onDelete = id => {
    const {mainList} = this.state
    const finalData = mainList.filter(eachValue => eachValue.id === id)
    const filteredData = mainList.filter(eachThing => eachThing.id !== id)
    this.setState(prevState => ({
      Balance:
        finalData[0].Type === 'Income'
          ? prevState.Balance - finalData[0].Amount
          : prevState.Balance + finalData[0].Amount,
      Income:
        finalData[0].Type === 'Income'
          ? prevState.Income - finalData[0].Amount
          : prevState.Income,
      Expense:
        finalData[0].Type === 'Income'
          ? prevState.Expense
          : prevState.Expense - finalData[0].Amount,
    }))
    this.setState({mainList: filteredData})
  }

  render() {
    const {mainList, type, Balance, Income, Expense, name, amount} = this.state

    return (
      <div className="mainCon">
        <div className="headCon">
          <h1 className="mainH">Hi, Sekhar</h1>
          <p className="mainP">
            Welcome back to your <span className="spanEl">Money Manager</span>
          </p>
        </div>
        <MoneyDetails Balance={Balance} Income={Income} Expense={Expense} />
        <div className="thirdCon">
          <form className="formEl" onSubmit={this.onAdding}>
            <h1 className="formH">Add Transaction</h1>
            <label className="labelEl" htmlFor="Name">
              TITLE
            </label>
            <input
              type="text"
              id="Name"
              className="inputEl"
              placeholder="TITLE"
              onChange={this.onChangeName}
              value={name}
            />
            <label className="labelEl" htmlFor="Amount">
              AMOUNT
            </label>
            <input
              type="type"
              id="Amount"
              className="inputEl"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="labelEl" htmlFor="SelectEl">
              TYPE
            </label>
            <select
              id="SelectEl"
              className="selectEl"
              value={type}
              onChange={this.onSelect}
            >
              {transactionTypeOptions.map(eachList => (
                <option
                  className="optionEl"
                  key={eachList.id}
                  value={eachList.displayText}
                >
                  {eachList.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="bton">
              Add
            </button>
          </form>
          <div className="hisCon">
            <h1 className="hisH">History</h1>
            <ul className="listCon">
              <li className="listItem">
                <p className="listH">Title</p>
                <p className="listH">Amount</p>
                <p className="listH">Type</p>
              </li>
              {mainList.map(eachItem => (
                <TransactionItem
                  key={eachItem}
                  itemDetails={eachItem}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
