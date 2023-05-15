import React, { FC } from 'react';
import styles from './Task.module.scss';
import Check from '../Check/Check';
import clsx from 'clsx';
import { Itask } from '../../types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchChangeTask } from '../../redux/slices/taskSlice';

const Task: FC<Itask> = (props) => {
  const dispatch = useAppDispatch();
  const onClickCompleted = () => {
    dispatch(fetchChangeTask(props));
  };

  return (
    <div onClick={onClickCompleted} className={clsx(styles.task__container, props.completed && styles.task__comleted)}>
      <Check isCompleted={props.completed} />

      <p>{props.name}</p>
    </div>
  );
};

export default Task;
