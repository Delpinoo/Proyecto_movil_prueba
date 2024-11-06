import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private afAuth: AngularFireAuth) {}

  // Método para registro de usuario en Firebase
  async registerUser(correo: string, contrasena: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(correo, contrasena);
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      throw error;
    }
  }

  // Método para enviar correo de recuperación de contraseña
  async sendPasswordResetEmail(correo: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(correo);
      console.log('Correo de recuperación enviado');
    } catch (error) {
      console.error('Error al enviar el correo de recuperación', error);
      throw error;
    }
  }

  // Método para inicio de sesión
  async login(correo: string, contrasena: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(correo, contrasena);
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
      throw error;
    }
  }
  async loginWithEmail(correo: string, contrasena: string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(correo, contrasena);
  }

  // Método para cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
