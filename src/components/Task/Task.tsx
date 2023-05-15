import React, { FC } from 'react';
import styles from './Task.module.scss';
import Check from '../Check/Check';
import clsx from 'clsx';
import { Itask } from '../../types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchChangeTask } from '../../redux/slices/taskSlice';
import SubTask from './SubTask';

const Task: FC<Itask> = (props) => {
  const dispatch = useAppDispatch();
  const onClickCompleted = () => {
    dispatch(fetchChangeTask(props));
  };
  console.log(props);
  return (
    <>
      <div
        onClick={onClickCompleted}
        className={clsx(styles.task__container, props.completed && styles.task__comleted)}>
        <Check isCompleted={props.completed} />
        <p>{props.name}</p>
      </div>
      {props.subtasks
        ? props.subtasks.map((item) => (
            <SubTask
              key={item._id}
              parent_id={props._id}
              _id={item._id}
              name={item.name}
              completed={props.completed ? true : item.completed}
            />
          ))
        : ''}
    </>
  );
};

export default Task;
