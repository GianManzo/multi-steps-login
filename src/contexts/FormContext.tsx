import { createContext, useContext, useReducer } from 'react';
import { FormActions } from '~/enum/enum';
import { IState } from '../interfaces/IState';
import { IAction } from '../interfaces/IAction';
import { IContextType } from '../interfaces/IContextType';
import { IFormProviderProps } from '~/interfaces/IFormProviderProps';

export const initialData: IState = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
};

export const FormContext = createContext<IContextType | undefined>(undefined);

export const formReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};
export const FormProvider = ({ children }: IFormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm precisar ser usado dentro do FormProvider');
  }
  return context;
};
