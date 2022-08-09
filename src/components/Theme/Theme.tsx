import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './Theme.module.scss';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <Header />
        <div className={styles.steps}>
          <div className={styles.sideBar}>
            <SideBar
              title='Pessoal'
              description='Se
            identifique'
              icon='profile'
              path='/'
            />
            <SideBar
              title='Profissional'
              description='Seu
            nível'
              icon='book'
              path='/step2'
            />
            <SideBar
              title='Contato'
              description='Como
            te
            encontrar'
              icon='mail'
              path='/step3'
            />
          </div>
          <div className={styles.page}>{children}</div>
        </div>
      </div>
    </div>
  );
};
