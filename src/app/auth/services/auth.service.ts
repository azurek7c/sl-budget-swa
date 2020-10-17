import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthMe } from './auth.service.interfaces';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  authMe(): Observable<AuthMe> {
    let url = environment.authUrl + 'me';

    if (!environment.production) {
      url = environment.authUrlMock;
    }

    return this.httpClient.get(url).pipe(map((x) => x as AuthMe));
  }

  isAuthenticated(): Observable<boolean> {
    return this.authMe().pipe(
      first(),
      map((x: AuthMe) => {
        return x.clientPrincipal === null
          ? false
          : x.clientPrincipal.userRoles.includes('authenticated');
      })
    );
  }
}
