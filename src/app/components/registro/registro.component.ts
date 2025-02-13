import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';  // Importar Storage

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  @Input() username: string = '';
  @Input() name: string = '';
  @Input() apm: string = '';
  @Input() apa: string = '';
  @Input() tele: string = '';
  @Input() gmail: string = '';
  @Input() password: string = '';

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();  // Crear el almacenamiento
  }

  async registrarUsuario() {
    // Guardar los datos en el almacenamiento
    await this.storage.set('correo_registrado', this.gmail);
    await this.storage.set('contrasena_registrada', this.password);

    console.log('Usuario registrado con éxito');
    console.log('Correo:', this.gmail, 'Contraseña:', this.password);
  }
}
