import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.page.html',
  styleUrls: ['./lista-alumno.page.scss'],
})
export class ListaAlumnoPage implements OnInit {

  items: string[] = [];

  constructor() { }

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

}
