import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication.service';
import { LoginService } from '../services/login.service';
import { RecoveryService } from '../services/recovery.service';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {

  @Input() page = 'login';
  @Input() loginService: LoginService;
  @Input() signupService: SignupService;
  @Input() recoveryService: RecoveryService;
  constructor() { }

  ngOnInit() {
  }

  setPage(page: string) {
    this.page = page;
  }

  onReduce(event) {
    console.log('@@##', event);
  }

}
