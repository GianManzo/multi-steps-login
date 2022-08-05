import { FormActions } from '~/enum/enum';

export type Action = {
  type: FormActions;
  payload: any;
};
