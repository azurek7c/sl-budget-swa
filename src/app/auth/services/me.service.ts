import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthMe } from './me.service.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  constructor(private httpClient: HttpClient) {}

  authMe(): Observable<AuthMe> {
    return this.httpClient
      .get(environment.authMeUrl)
      .pipe(map((x) => x as AuthMe));
  }
}
