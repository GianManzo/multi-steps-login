import { FormActions } from '~/enum/enum';

export interface IAction {
  type: FormActions;
  payload: any;
}
