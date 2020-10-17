import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authMeService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.store.pipe(
    //   select(selectIsLoggedIn),
    //   tap((isLoggedIn: boolean) => {
    //     if (!isLoggedIn) {
    //       this.router.navigateByUrl('login');
    //     }
    //   })
    // );

    return this.authMeService.isAuthenticated().pipe(
      tap((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          window.location.href = environment.authUrl + 'login/github';
        }
      })
    );
  }
}
