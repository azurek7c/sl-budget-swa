import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthMe } from '../services/auth.service.interfaces';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  meAuth: Observable<AuthMe>;

  constructor(public meService: AuthService) {}

  ngOnInit(): void {}

  onAuthMe(): void {
    this.meAuth = this.meService.authMe();
  }
}
