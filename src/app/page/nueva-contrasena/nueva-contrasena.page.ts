import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.page.html',
  styleUrls: ['./nueva-contrasena.page.scss'],
})
export class NuevaContrasenaPage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  async cambiarContrasena() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La contraseña se cambió correctamente.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/home']);
          },
          cssClass: 'alert-button-white',
        },
      ],
    });

    alert.cssClass = 'custom-alert';
    
    await alert.present();
  }
}
