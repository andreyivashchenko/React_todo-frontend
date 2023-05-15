import React, { FC, useEffect } from 'react';
import styles from './Home.module.scss';
import Task from '../components/Task/Task';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchTasks } from '../redux/slices/taskSlice';
import { useAppSelector } from '../hooks/useAppSelector';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const { tasks } = useAppSelector((state) => state.tasks);

  const completedTask = tasks.filter((item) => item.completed === true);

  const incompleteTask = tasks.filter((item) => item.completed === false);

  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__container}>
        <div className={styles.home__title}>
          {/*<Botton/>*/}
          <h2>School</h2>
        </div>
        <input type="text" placeholder={'Add a task'} />
        <div>
          <h3 className={styles.home__tasks}>Tasks - {incompleteTask.length}</h3>
          {incompleteTask.map((item) => (
            <Task key={item._id} {...item} />
          ))}
        </div>

        <div>
          <h3 className={styles.home__tasks}>Comleted - {completedTask.length}</h3>
          {completedTask.map((item) => (
            <Task key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
