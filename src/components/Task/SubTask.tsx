import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Task.module.scss';
import Check from '../Check/Check';
import { ISubTasks } from '../../types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchChangeTask } from '../../redux/slices/taskSlice';

const SubTask: FC<ISubTasks> = (props) => {
  const dispatch = useAppDispatch();
  const onClickCompleted = () => {
    dispatch(fetchChangeTask(props));
  };
  console.log(props);
  return (
    <div
      onClick={onClickCompleted}
      className={clsx(styles.task__container, styles.task__subtask, props.completed && styles.task__comleted)}>
      <Check isCompleted={props.completed} />
      <p>{props.name}</p>
    </div>
  );
};

export default SubTask;
