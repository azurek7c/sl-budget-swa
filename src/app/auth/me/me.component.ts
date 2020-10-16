import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { MeService } from '../services/me.service';
import { AuthMe } from '../services/me.service.interfaces';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  meAuth: Observable<AuthMe>;

  constructor(public meService: MeService) {}

  ngOnInit(): void {}

  onAuthMe(): void {
    this.meAuth = this.meService.authMe();
  }
}
