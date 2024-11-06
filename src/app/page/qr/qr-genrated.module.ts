import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrGenratedPageRoutingModule } from './qr-genrated-routing.module';
import { QrGenratedPage } from './qr-genrated.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGenratedPageRoutingModule,
    SharedModule
  ],
  declarations: [QrGenratedPage]
})
export class QrGenratedPageModule {}
