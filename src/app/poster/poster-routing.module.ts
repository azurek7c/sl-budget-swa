import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PosterAddComponent } from './components/poster-add/poster-add.component';
import { PosterListComponent } from './components/poster-list/poster-list.component';

const routes: Routes = [
  {
    path: '',
    component: PosterListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: PosterAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosterRoutingModule {}
