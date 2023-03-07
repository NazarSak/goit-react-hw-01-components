import TransactionRender from './TransactionRender';
import PropTypes from 'prop-types';

import {
  Table,
  UpTable,
  ListTransaction,
  Payments,
  Details,
} from './transactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <UpTable>
        <ListTransaction>
          <Payments>Type</Payments>
          <Payments>Amount</Payments>
          <Payments>Currency</Payments>
        </ListTransaction>
      </UpTable>
      <Details>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionRender
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </Details>
    </Table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
