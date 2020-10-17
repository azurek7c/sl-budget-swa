import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthMe } from './auth.service.interfaces';
import { first, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  authMe(): Observable<AuthMe> {
    return this.httpClient
      .get(environment.authUrl + 'me')
      .pipe(map((x) => x as AuthMe));
  }

  isAuthenticated(): Observable<boolean> {
    return this.authMe().pipe(
      first(),
      map((x: AuthMe) => x.clientPrincipal.userRoles.includes('authenticated'))
    );
  }
}
