import  TransactionRender from './TransactionRender';

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
<tbody>
{items.map(item => (
    <tr key ={item.id} >
 <TransactionRender
 type = {item.type}
 amount = {item.amount}
 currency = {item.currency}
 /> 
    </tr>
))}

</tbody>

    </table>
  );
}
