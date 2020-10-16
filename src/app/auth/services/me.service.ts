import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  private readonly url = '.auth/me';

  constructor(private httpClient: HttpClient) {}

  authMe(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + this.url);
  }
}
