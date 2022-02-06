import PropTypes from 'prop-types';
import React from 'react';

import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section>
      <h2>2 - Секция статистики</h2>

      {title && <h3 className={s.title}>{title}</h3>}

      <ul className={s.list}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
