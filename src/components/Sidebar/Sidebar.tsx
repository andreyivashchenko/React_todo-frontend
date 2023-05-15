import styles from './Sidebar.module.scss';
import SidebarItem from '../Folder/SidebarItem';
import folder from '../../assets/folder-svgrepo-com.svg';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dirBlock}>
        <img src={folder} alt="folder" className={styles.img} />
        <h2 className={styles.title}>Collections</h2>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
    </div>
  );
};

export default Sidebar;
