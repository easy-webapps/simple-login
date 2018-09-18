import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormBaseComponent } from '../../base/form-base.component';
import { FieldDataObject } from '../../base/form-base.interface';
import { FormCreatorService } from '../../base/form-creator.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent {

  @Input() loginService: LoginService;
  @Output() reduce = new EventEmitter();

  translations_button = {
    default: 'Login',
    error: 'Erro',
    saved: 'Logado',
    saving: 'Logando'
  };

  fields: FieldDataObject = {
    password: {
      value: '', required: true, type: 'password',
    },
    email: {
      value: '', required: true, type: 'email'
    }
  };

  public getFields() {
    return this.fields;
  }

  constructor(protected formCreatorService: FormCreatorService) {
    super(formCreatorService);
  }

  save() {
    try {
      if (this.form.valid) {
        this.loginService.login(this.form.value).subscribe(response => {
          console.log('@@##', response);
        });
      }
    } catch (e) {
      console.warn(e);
    }
  }

}
