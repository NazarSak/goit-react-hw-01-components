import PropTypes from 'prop-types';

import { Methods } from './transactionHistory.styled';

const TransactionRender = ({ type, amount, currency }) => {
  return (
    <>
      <Methods>{type}</Methods>
      <Methods>{amount}</Methods>
      <Methods>{currency}</Methods>
    </>
  );
};

TransactionRender.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionRender;
