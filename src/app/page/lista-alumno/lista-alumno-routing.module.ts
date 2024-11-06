import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAlumnoPage } from './lista-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAlumnoPageRoutingModule {}
