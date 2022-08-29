import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';

const routes: Routes = [
  { path : 'Index', component : IndexComponent},
  { path : 'Working', component : WorkInProgressComponent},
  { path : '', redirectTo: 'Index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
