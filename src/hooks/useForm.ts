import { useContext } from 'react';
import { FormContext } from '~/contexts/FormContext';

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm precisar ser usado dentro do Form Provider');
  }
  return context;
};
