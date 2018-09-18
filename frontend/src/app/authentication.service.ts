import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginService } from './login/services/login.service';
import { RecoveryService } from './login/services/recovery.service';
import { SignupService } from './login/services/signup.service';

@Injectable()
export class AuthenticationService implements LoginService, RecoveryService, SignupService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  login = (data) => this.http.post(`${this.url}/login`, data);
  recovery = (data) => this.http.post(`${this.url}/recovery`, data);
  signup = (data) => this.http.post(`${this.url}/signup`, data);
}
