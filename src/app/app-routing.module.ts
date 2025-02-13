import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./page/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },

  {
    path: 'tabs',
    redirectTo: 'tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'comprobante',
    loadChildren: () => import('./page/comprobante/comprobante.module').then( m => m.ComprobantePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
     path: 'perfil', loadChildren: () => import('./page/perfil/perfil.module').then(m => m.PerfilPageModule) 
  }, 
  {
    path: 'acercade',
    loadChildren: () => import('./page/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./page/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
