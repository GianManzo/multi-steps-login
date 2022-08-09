/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IOptions } from '~/interfaces/IOptions';
import styles from './SelectOptions.module.scss';
export const SelectOptions = ({ title, description, icon, selected, onClick }: IOptions) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={onClick}
      className={styles.container}
      style={{ borderColor: selected ? '#25cd89' : '#16195c' }}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
