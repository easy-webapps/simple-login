import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Input() signupService: SignupService;
  constructor() { }

}
