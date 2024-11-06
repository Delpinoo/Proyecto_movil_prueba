import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToqr() {
    this.navCtrl.navigateForward('/qr')
  }
  goTolista_docente() {
    this.navCtrl.navigateForward('/lista-docente')
  }

  ngOnInit() {
  }

}
