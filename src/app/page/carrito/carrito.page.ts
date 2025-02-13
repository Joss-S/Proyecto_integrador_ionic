import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false
})
export class CarritoPage implements OnInit {

  carrito: any[] = [];
  total: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
      this.calcularTotal();
    }
  }

  calcularTotal() {
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }

  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.calcularTotal();
  }

  irAlComprobante() {
    this.router.navigate(['/comprobante'], { queryParams: { carrito: JSON.stringify(this.carrito) } });
  }
}
