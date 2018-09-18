import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailFieldModule } from 'ng-easy-forms/lib/email-field';
import { PasswordFieldModule } from 'ng-easy-forms/lib/password-field';
import { SaveButtonModule } from 'ng-easy-forms/lib/save-button';

import { FormCreatorService } from './base/form-creator.service';
import { LockerComponent } from './components/locker.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    EmailFieldModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    PasswordFieldModule,
    ReactiveFormsModule,
    SaveButtonModule
  ],
  providers: [FormCreatorService],
  declarations: [LockerComponent, LoginComponent, RecoveryComponent, SignupComponent],
  exports: [LockerComponent],
})
export class LoginModule { }
