import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
