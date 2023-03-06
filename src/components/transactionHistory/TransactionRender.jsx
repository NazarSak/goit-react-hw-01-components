import propTypes from "prop-types"

 const TransactionRender = ({ type,amount,currency}) => {
return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
)
}

TransactionRender.propTypes = {
type : propTypes.string,
amount : propTypes.string,
currency : propTypes.string
}

export default TransactionRender