import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <Header />
        <div className={styles.steps}>
          <div className={styles.sideBar}>...</div>
          <div className={styles.page}>{children}</div>
        </div>
      </div>
    </div>
  );
};
