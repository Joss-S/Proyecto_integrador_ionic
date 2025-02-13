import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {
  usuario: any = {};  
  token = localStorage.getItem('token'); 

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    console.log("token: ", this.token);
    await this.storage.create();

  
    this.usuario = await this.storage.get('usuario_actual') || {};  
    console.log("Usuario actual:", this.usuario);
  }

  async cerrarSesion() {
    localStorage.removeItem('token'); 
    await this.storage.remove('usuario_actual'); 
    this.usuario = {};  
    this.router.navigate(['/inicio-sesion']);  
  }
}
