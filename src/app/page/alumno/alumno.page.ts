import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import jsQR from 'jsqr';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  // Función para ir a la página de verificación
  goToverification() {
    this.navCtrl.navigateForward('/verificacion');
  }

  // Función para ir a la página de Ramos
  goToRamos() {
    this.navCtrl.navigateForward('/ramos');
  }

  // Función para ir a la página de lista alumno
  goTolista_alumno() {
    this.navCtrl.navigateForward('/lista-alumno');
  }

  // Función para iniciar el escaneo de QR
  async scanQRCode() {
    try {
      // Capturar la imagen usando la cámara
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
        quality: 100,
      });

      // Convertir la imagen en base64 a una imagen de tipo canvas para procesarla
      const imageData = await this.base64ToCanvas(photo.base64String);

      if (imageData) {
        // Usar jsQR para leer el código QR a partir de ImageData
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrCode) {
          console.log('Código QR escaneado:', qrCode.data);
          // Aquí puedes navegar a una página con el resultado del QR
          this.navCtrl.navigateForward(`/resultado-qr/${qrCode.data}`);
        } else {
          console.log('No se encontró un código QR.');
        }
      } else {
        console.log('Error al obtener los datos de la imagen.');
      }
    } catch (error) {
      console.error('Error al escanear el QR: ', error);
    }
  }

  // Convierte la cadena base64 a un canvas y obtiene los datos de la imagen (ImageData)
  private base64ToCanvas(base64: string | undefined): Promise<ImageData | null> {
    return new Promise((resolve, reject) => {
      if (!base64) {
        console.error('Error: El valor base64 es indefinido');
        reject('Base64 es indefinido');
        return;
      }

      const img = new Image();
      img.src = `data:image/png;base64,${base64}`;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        // Obtenemos el ImageData de la imagen cargada
        const imgData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        if (imgData) {
          resolve(imgData);
        } else {
          reject('No se pudo obtener el ImageData');
        }
      };

      img.onerror = () => reject('Error al cargar la imagen');
    });
  }

  ngOnInit() {}
}
