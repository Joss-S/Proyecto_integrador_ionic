import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: false
})
export class InicioSesionPage implements OnInit {
  email: string = '';
  password: string = '';
  usuarioGuardado: any = {};

  constructor(
    private navController: NavController,
    private storage: Storage
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async login(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      console.log('Todos los campos son requeridos');
      return;
    }

    // Obtener la lista de usuarios
    const usuarios = await this.storage.get('usuarios') || [];

    // Buscar si existe un usuario con el correo ingresado
    const usuarioEncontrado = usuarios.find((user: any) => user.gmail === this.email);

    if (usuarioEncontrado && usuarioEncontrado.password === this.password) {
      console.log('Inicio de sesión exitoso');
      await this.storage.set('usuario_actual', usuarioEncontrado);
      localStorage.setItem('token', usuarioEncontrado.gmail);
      this.navController.navigateForward('/tabs/inicio');
    } else {
      console.log('Correo o contraseña incorrectos');
    }
  }
}
