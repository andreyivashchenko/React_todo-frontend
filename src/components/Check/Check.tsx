import React, { FC } from 'react';
import styles from './Check.module.scss';
import clsx from 'clsx';
import check from '../../assets/check.svg';

interface CheckProps {
  isCompleted: boolean;
}
const Check: FC<CheckProps> = (isCompleted) => {
  // const isCompletedd = useAppSelector((state) => state.tasks.value);

  return (
    <div className={clsx(styles.box, isCompleted.isCompleted && styles.checked)}>
      {isCompleted.isCompleted && <img src={check} alt="check" />}
    </div>
  );
};

export default Check;
