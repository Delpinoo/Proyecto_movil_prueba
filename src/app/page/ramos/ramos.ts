import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.page.html',
  styleUrls: ['./ramos.page.scss'],
})
export class RamosPage implements OnInit {
  user: any;
  ramos: any[] = [];

  private ramosPorCarrera: { [key: string]: any[] } = {
    Informatica: [ 
      { nombre: 'Matemáticas', asistencia: 76, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Programación', asistencia: 72, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Inglés', asistencia: 68, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Cristianismo', asistencia: 54, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] }
    ],
    Mecanica: [ 
      { nombre: 'Física', asistencia: 80, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Química', asistencia: 75, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Matemáticas', asistencia: 70, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Cristianismo', asistencia: 50, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] }
    ],
    Administracion: [ 
      { nombre: 'Contabilidad', asistencia: 78, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Economía', asistencia: 77, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Administración', asistencia: 85, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] },
      { nombre: 'Cristianismo', asistencia: 60, fechas: ['27-10-2024', '24-10-2024', '27-09-2024'] }
    ],
  };

  constructor(private navCtrl: NavController, private userService: UserService) {}

  ngOnInit() {
    
    if (this.user) {
      this.setRamosPorCarrera(this.user.carrera);
    } else {
      console.error('No hay usuario logueado.');
    }
  }

  setRamosPorCarrera(carrera: string) {
    this.ramos = this.ramosPorCarrera[carrera] || [];
  }
}
