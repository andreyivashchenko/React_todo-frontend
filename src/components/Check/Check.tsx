import React, { FC } from 'react';
import styles from './Check.module.scss';
import clsx from 'clsx';
import check from '../../assets/check.svg';
import { TaskProps } from '../Task/Task';

const Check: FC<TaskProps> = ({ isCompleted }) => {
  return (
    <div className={clsx(styles.box, isCompleted && styles.box__checked)}>
      {isCompleted && <img src={check} alt="check" />}
    </div>
  );
};

export default Check;
