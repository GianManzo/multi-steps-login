import styles from './Header.module.scss';
export const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Cadastro de Desenvolvedor</h1>
      <p>Faça seu cadastro em nossa lista</p>
    </header>
  );
};
