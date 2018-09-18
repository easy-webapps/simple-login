import { Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FieldDataObject } from './form-base.interface';
import { FormCreatorService } from './form-creator.service';

export abstract class FormBaseComponent implements OnInit {
  @Input() formData: any;
  @Input() saving = false;
  @Input() savedError = false;
  @Input() isInvalid = false;
  public form: FormGroup;
  abstract getFields(): FieldDataObject;
  constructor(protected formCreatorService: FormCreatorService) {}

  ngOnInit() {
    try {
      const fields: FieldDataObject = this.getFields();
      this.form = this.formCreatorService.getForm(fields, this.formData);
      this.form.valueChanges.subscribe(data => this.savedError = false);
    } catch (e) { console.warn(e); }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        return;
      }

      if (control instanceof FormGroup) {
        return this.validateAllFormFields(control);
      }
    });
  }
}
