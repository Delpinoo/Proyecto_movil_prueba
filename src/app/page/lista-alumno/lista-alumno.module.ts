import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaAlumnoPageRoutingModule } from './lista-alumno-routing.module';
import { ListaAlumnoPage } from './lista-alumno.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAlumnoPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaAlumnoPage]
})
export class ListaAlumnoPageModule {}
