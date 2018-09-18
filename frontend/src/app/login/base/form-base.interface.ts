import { ValidatorFn } from '@angular/forms';

export interface FieldData {
  value?: any;
  required: boolean;
  disabled?: boolean;
  type?: string;
  validators?: ValidatorFn[];
  title?: string;
}

export interface FieldDataObject {
  [s: string]: FieldData;
}
