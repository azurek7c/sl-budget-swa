import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [MeComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MeComponent],
})
export class AuthModule {}
