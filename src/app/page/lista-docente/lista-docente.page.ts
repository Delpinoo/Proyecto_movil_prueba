import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.page.html',
  styleUrls: ['./lista-docente.page.scss'],
})
export class ListaDocentePage implements OnInit {
  alertButtons = ['Aceptar'];

  items: string[] = [];

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = count; i < Math.min(count + 50, 30); i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev:InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  async guardar_list() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La lista se guardó correctamente.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/docente']);
          },
          cssClass: 'alert-button-white',
        },
      ],
    });

    alert.cssClass = 'custom-alert';
    
    await alert.present();
  }
}
