import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NuevaContrasenaPageRoutingModule } from './nueva-contrasena-routing.module';
import { NuevaContrasenaPage } from './nueva-contrasena.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaContrasenaPageRoutingModule,
    SharedModule,
  ],
  declarations: [NuevaContrasenaPage]
})
export class NuevaContrasenaPageModule {}
