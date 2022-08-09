import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Theme } from '~/components/Theme/Theme';
import { useForm } from '~/contexts/FormContext';
import { FormActions } from '~/enum/enum';
import styles from './ThirdStepForm.module.scss';

FormActions;
export const ThirdStepForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') console.log(state);
    else alert('preencha os dados');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (!state.name) navigate('/');
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, [dispatch, navigate, state.name]);

  return (
    <Theme>
      <div className={styles.container}>
        <p>Passo 3/3</p>
        <h1>Onde podemos te encontrar {state.name}?</h1>
        <p>Preencha suas informações de contato abaixo!.</p>

        <hr />

        <label>
          Seu email
          <input type='email' value={state.email} onChange={handleEmailChange} />
          <span className={styles.error}></span>
        </label>
        <label>
          Seu GitHub
          <input type='url' value={state.github} onChange={handleGitChange} />
        </label>

        <Link to='/step2'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </div>
    </Theme>
  );
};
