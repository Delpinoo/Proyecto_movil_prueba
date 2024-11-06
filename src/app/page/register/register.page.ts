import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    carrera: '',
    seccion: '',
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private userService: UserService 
  ) {}

  ngOnInit() {}

  async Register() {
    if (this.validateFields()) {
      try {
        // Intentar registrar al usuario en Firebase
        await this.userService.registerUser(this.user.correo, this.user.contrasena);
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Se registró correctamente',
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
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al registrarse. Verifique sus datos.',
          buttons: ['Aceptar'],
        });
        alert.cssClass = 'custom-alert';
        await alert.present();
      }
    }
  }

  validateFields(): boolean {
    const nombreValid = this.user.nombre.length > 3 && /^[a-zA-Z]+$/.test(this.user.nombre);
    const apellidoValid = this.user.apellido.length > 3 && /^[a-zA-Z]+$/.test(this.user.apellido);
    const correoValid = 
    this.user.correo.endsWith('@duocuc.cl') || 
    this.user.correo.endsWith('@profesor.duoc.cl');
    const contrasenaValid = this.user.contrasena.length > 8 
                            && /[A-Z]/.test(this.user.contrasena) 
                            && /[0-9]/.test(this.user.contrasena);

    if (!nombreValid) {
      this.showAlert('Error', 'El nombre debe tener más de 5 caracteres y no puede contener números ni símbolos.');
      return false;
    }

    if (!apellidoValid) {
      this.showAlert('Error', 'El apellido debe tener más de 5 caracteres y no puede contener números ni símbolos.');
      return false;
    }

    if (!correoValid) {
      this.showAlert('Error', 'El correo debe ser institucional (@duocuc.cl o @profesor.duoc.cl).');
      return false;
    }

    if (!contrasenaValid) {
      this.showAlert('Error', 'La contraseña debe tener más de 8 caracteres, al menos una mayúscula y un número.');
      return false;
    }

    if (this.user.contrasena !== this.user.confirmarContrasena) {
      this.showAlert('Error', 'Las contraseñas no coinciden.');
      return false;
    }

    return true;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
