import propTypes from 'prop-types';

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
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};

export default TransactionRender;
