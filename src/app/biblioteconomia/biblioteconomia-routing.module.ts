import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssuntosComponent } from './assuntos/assuntos.component';

const routes: Routes = [
  {
    path: '',
    component:AssuntosComponent
  },
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BiblioteconomiaRoutingModule  {}
