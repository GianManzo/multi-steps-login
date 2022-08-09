import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '~/components/Theme/Theme';
import { useForm } from '~/contexts/FormContext';
import { FormActions } from '~/enum/enum';
import styles from './FirstStepForm.module.scss';

FormActions;
export const FirstStepForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const errorMessage = () => {
    const error = document.querySelector('span');
    error!.innerText = 'Preencha o campo para prosseguir!';
    setTimeout(() => {
      error!.innerText = '';
    }, 3000);
  };

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2');
    } else {
      errorMessage();
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  return (
    <Theme>
      <div className={styles.container}>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input type='text' autoFocus value={state.name} onChange={handleNameChange} />
          <span className={styles.error}></span>
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
};
