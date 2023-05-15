import React, { FC } from 'react';
import styles from './SidebarItem.module.scss';
const SidebarItem: FC = () => {
  return (
    <div className={styles.name}>
      <span>Work</span>
    </div>
  );
};

export default SidebarItem;
