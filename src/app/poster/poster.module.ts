import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterRoutingModule } from './poster-routing.module';
import { PosterListComponent } from './components/poster-list/poster-list.component';
import { PosterAddComponent } from './components/poster-add/poster-add.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [PosterListComponent, PosterAddComponent],
  imports: [CommonModule, PosterRoutingModule, MaterialModule],
})
export class PosterModule {}
