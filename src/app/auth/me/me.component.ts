import { Component, OnInit } from '@angular/core';
import { MeService } from '../services/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  constructor(private meService: MeService) {}

  ngOnInit(): void {}

  onAuthMe(): void {
    this.meService.authMe().subscribe(a => console.log(a));
  }
}
