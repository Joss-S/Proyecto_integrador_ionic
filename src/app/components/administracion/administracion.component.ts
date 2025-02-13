import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss'],
  standalone: false
})
export class AdministracionComponent  implements OnInit {
  @Input() title: string = 'Opciones'; 
  @Input() menuItems: { label: string, link: string }[] = [];
  constructor() { }

  ngOnInit() {}

}
