import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDelete} = props
  const {id, Title, Amount, Type} = itemDetails
  const onDeleting = () => {
    onDelete(id)
  }

  return (
    <li className="listItem">
      <p className="listP">{Title}</p>
      <p className="listP">Rs {Amount}</p>
      <p className="listP">{Type}</p>
      <button
        type="button"
        className="delBton"
        data-testid="delete"
        onClick={onDeleting}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delIcon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
