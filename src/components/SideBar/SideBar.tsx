import { Link } from 'react-router-dom';
import { ISideBar } from '~/interfaces/ISideBar';
import styles from './SideBar.module.scss';
export const SideBar = ({ title, description, icon, path }: ISideBar) => {
  return (
    <div className={styles.container}>
      <Link to={path}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.iconArea}></div>
        <div className={styles.point}></div>
      </Link>
    </div>
  );
};
