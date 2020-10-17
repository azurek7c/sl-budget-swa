import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MeComponent } from './me/me.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [MeComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [MeComponent],
})
export class AuthModule {}
