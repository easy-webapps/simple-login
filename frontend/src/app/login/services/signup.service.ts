import { Observable } from 'rxjs/Observable';

export interface SignupData {
  name?: string;
  email: string;
  password: string;
}

export interface SignupService {
  signup(data): Observable<any>;
}
