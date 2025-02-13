import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {
  username: string = '';
  gmail: string = '';
  name: string = '';
  apa: string = '';
  apm: string = '';
  tele: string = '';
  password: string = '';
  confirmPassword: string = '';
  aceptoTerminos: boolean = false;

  constructor(
    private alertController: AlertController,
    private storage: Storage,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }
  formValido(): boolean {
    return (
      this.username.trim() !== '' &&
      this.name.trim() !== '' &&
      this.apa.trim() !== '' &&
      this.apm.trim() !== '' &&
      this.tele.trim().length === 10 &&
      this.gmail.includes('@') &&
      this.password.trim().length >= 6 &&
      this.confirmPassword.trim().length >= 6 &&
      this.password === this.confirmPassword &&
      this.aceptoTerminos
    );
  }

  async registrar() {
    console.log('Registrando usuario...');

    if (!this.formValido()) {
      await this.mostrarAlerta('Error', 'Por favor, completa todos los campos correctamente.');
      return;
    }

    const usuario = {
      username: this.username.trim(),
      name: this.name.trim(),
      apa: this.apa.trim(),
      apm: this.apm.trim(),
      tele: this.tele.trim(),
      gmail: this.gmail.trim(),
      password: this.password.trim()
    };

    try {
   
      let usuarios = (await this.storage.get('usuarios')) || [];
      usuarios.push(usuario);
      await this.storage.set('usuarios', usuarios);

  
      await this.storage.set('usuario_actual', usuario);
      localStorage.setItem('token', usuario.gmail);

      console.log('Usuario registrado con éxito:', usuario);
      
      await this.mostrarAlerta('Registro Exitoso', 'Tu cuenta ha sido registrada correctamente :)');

      setTimeout(() => {
        this.router.navigate(['/inicio-sesion']);
      }, 2000);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      await this.mostrarAlerta('Error', 'Hubo un problema al registrar tu cuenta.');
    }
  }

 
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

 
  async verTerminos() {
    const alert = await this.alertController.create({
      header: 'Términos y Condiciones',
      message: `
        Al registrarte en nuestra aplicación, aceptas los siguientes términos:
        No compartirás tus credenciales con terceros.
        Respetarás las normas de la comunidad.
        La información proporcionada será tratada con confidencialidad.
      `,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
