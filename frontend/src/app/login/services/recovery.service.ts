import { Observable } from 'rxjs/Observable';

export interface RecoveryData {
  email: string;
}

export interface RecoveryService {
  recovery(data: RecoveryData): Observable<any>;
}
