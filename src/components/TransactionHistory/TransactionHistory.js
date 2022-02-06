import PropTypes from 'prop-types';
import React from 'react';

import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <section>
      <h2>4 - История транзакций</h2>
      <table className={s.table}>
        <thead className={s.head}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
