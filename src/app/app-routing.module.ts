import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { PatientenListComponent } from './patienten-list/patienten-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'patienten-list', pathMatch: 'full' },
  { path: 'patienten-list', component: PatientenListComponent },
  { path: 'create-update', component: CreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
