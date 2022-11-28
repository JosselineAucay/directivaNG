import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Compag1Component } from './Components/compag1/compag1.component';
const routes: Routes = [
  {
    path: '', component: Compag1Component
  }
 // {path: '', component:component1}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
