import { IAction } from './IAction';
import { IState } from './IState';

export interface IContextType {
  state: IState;
  dispatch: (action: IAction) => void;
}
