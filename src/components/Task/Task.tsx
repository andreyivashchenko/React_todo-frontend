import React, { FC } from 'react';
import styles from './Task.module.scss';
import Check from '../Check/Check';
import clsx from 'clsx';
export interface TaskProps {
  data?: string;
  isCompleted?: boolean;
}
const Task: FC<TaskProps> = ({ data, isCompleted = false }) => {
  return (
    <div className={clsx(styles.task__container, isCompleted && styles.task__comleted)}>
      <Check isCompleted={isCompleted} />
      <p>{data}</p>
    </div>
  );
};

export default Task;
