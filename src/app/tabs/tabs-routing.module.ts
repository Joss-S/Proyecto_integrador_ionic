import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../page/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('../page/servicios/servicios.module').then( m => m.ServiciosPageModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('../page/citas/citas.module').then( m => m.CitasPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../page/productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('../page/carrito/carrito.module').then( m => m.CarritoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
