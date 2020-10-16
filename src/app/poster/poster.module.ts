import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterRoutingModule } from './poster-routing.module';
import { PosterListComponent } from './components/poster-list/poster-list.component';
import { PosterAddComponent } from './components/poster-add/poster-add.component';

@NgModule({
  declarations: [PosterListComponent, PosterAddComponent],
  imports: [CommonModule, PosterRoutingModule],
})
export class PosterModule {}
