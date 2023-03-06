import TransactionRender from './TransactionRender';
import propTypes from 'prop-types';

import {
  Table,
  UpTable,
  ListTransaction,
  Payments,
  Details,
} from './transactionHistory.styled';

TransactionHistory.propTypes = {
  type: propTypes.string,
  amount: propTypes.number,
  currency: propTypes.string,
};

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
