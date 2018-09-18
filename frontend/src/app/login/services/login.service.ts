import { Observable } from 'rxjs/Observable';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginService {
  login(data: LoginData): Observable<any>;
}
