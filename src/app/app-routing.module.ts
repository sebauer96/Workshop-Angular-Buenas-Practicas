import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/inicio/inicio.module#InicioModule'
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule',
  },
  {
    path: '**',
    loadChildren: './components/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
