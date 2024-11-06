import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qr-genrated',
  templateUrl: './qr-genrated.page.html',
  styleUrls: ['./qr-genrated.page.scss'],
})
export class QrGenratedPage implements OnInit, OnDestroy {
  qrUrl: string = '';
  intervalId: any;

  constructor(private navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {
    this.generateQrCode('https://tusitio.com');
    this.intervalId = setInterval(() => {
      this.onGenerateNewQr();
    }, 5000);
  }

  generateQrCode(data: string) {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=200x200`;
    this.qrUrl = apiUrl;
  }


  onGenerateNewQr() {
    const newData = `https://nuevo-sitio.com/${Math.random()}`;
    this.generateQrCode(newData);
  }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goTolista_docente() {
    this.navCtrl.navigateForward('/lista-docente');
  }
}