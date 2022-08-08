import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SelectOptions } from '~/components/SelectOptions/SelectOptions';
import { Theme } from '~/components/Theme/Theme';
import { useForm } from '~/contexts/FormContext';
import { FormActions } from '~/enum/enum';
import styles from './styles.module.scss';

FormActions;
export const SecondStepForm = () => {
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
      navigate('/step3');
    } else {
      errorMessage();
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  useEffect(() => {
    if (!state.name) navigate('/');
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, [dispatch, navigate, state.name]);

  return (
    <Theme>
      <div className={styles.container}>
        <p>Passo 2/3</p>
        <h1>Ola {state.name}</h1>
        <p>Você é programador a quanto tempo?</p>

        <hr />
        <SelectOptions
          title='Sou iniciante'
          description='1-2 anos'
          icon='🥳'
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOptions
          title='Sou programador experiente'
          description='+2 anos'
          icon='😎'
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link to='/'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
};
