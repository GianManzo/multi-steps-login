import { createContext, useReducer } from 'react';
import { FormActions } from '~/enum/enum';
import { State } from '../types/State';
import { Action } from '../types/Action';
import { ContextType } from '../types/ContextType';
import { FormProviderProps } from '~/types/FormProviderProps';

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
};

export const FormContext = createContext<ContextType | undefined>(undefined);

const formReducer = (state: State, action: Action) => {
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

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
