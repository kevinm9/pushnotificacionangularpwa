

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';



const routes: Routes = [
  { path: 'home', component: AppComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'error',
    component: AppComponent, // Página de error personalizada
  },
  {
    path: '**',
    redirectTo: '/error', // Redirecciona cualquier ruta no coincidente a la página de error
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
