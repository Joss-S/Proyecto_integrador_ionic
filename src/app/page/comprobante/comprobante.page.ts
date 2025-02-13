import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.page.html',
  styleUrls: ['./comprobante.page.scss'],
  standalone: false
})
export class ComprobantePage implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['carrito']) {
        this.carrito = JSON.parse(params['carrito']);
        this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
      }
    });
  }

  generarPDF() {
    const DATA = document.getElementById('comprobantePDF');
    if (!DATA) return;

    html2canvas(DATA).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('Comprobante-Compra.pdf');
    });
  }
}
