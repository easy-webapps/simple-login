import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { isNil } from 'ramda';

import { FieldData, FieldDataObject } from './form-base.interface';

@Injectable()
export class FormCreatorService {
  constructor(protected fb: FormBuilder) { }

  public getForm(fields: FieldDataObject, formData?: any): FormGroup {
    const group = this.getGroup(fields, formData);
    return this.fb.group(group);
  }

  private getGroup(fields: FieldDataObject, formData?: any) {
    const out = {};
    for (const i in fields) {
      if (!fields.hasOwnProperty(i)) { continue; }
      out[i] = this.getProperty(i, {...fields[i], value: formData ? formData[i] : fields[i].value});
    }
    return out;
  }
  private getProperty = (field: string, data: FieldData) => this.fb.control({
    value: data.value,
    disabled: data.disabled
  }, this.getValidators(field, data))

  private getValidators(fieldname: string, data: FieldData) {
    const out: Array<ValidatorFn> = [];
    if (data.required) { out.push(Validators.required); }
    if (!isNil(data.validators)) {
      for (const i in data.validators) {
        if (!data.validators[i]) { continue; }
        out.push(data.validators[i]);
      }
    }
    return out;
  }
}
