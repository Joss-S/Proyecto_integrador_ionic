import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false
})
export class ProductosPage implements OnInit {

  carrito: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
 
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
