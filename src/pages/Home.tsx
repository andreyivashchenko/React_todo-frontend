import React, { FC } from 'react';
import styles from './Home.module.scss';
import Task from '../components/Task/Task';

const Home: FC = () => {
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__container}>
        <div className={styles.home__title}>
          {/*<Botton/>*/}
          <h2>School</h2>
        </div>
        <input type="text" placeholder={'Add a task'} />
        <div>
          <h3 className={styles.home__tasks}>Tasks - 3</h3>
          <Task data={'Задача'} isCompleted={true} /> <Task data={'Задача'} />
          <Task data={'Задача'} isCompleted={true} />
        </div>
        <div>
          <h3 className={styles.home__tasks}>Comleted - 2</h3>
          <Task data={'Задача'} isCompleted={true} />
          <Task data={'Задача'} />
        </div>
      </div>
    </div>
  );
};

export default Home;
