import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive: {positivePercentage}%</li>
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
