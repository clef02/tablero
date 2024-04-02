import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./vista/vista.module').then(m =>m.VistaModule)
  },
  {
    path: 'penals',
    loadChildren: () => import('./penals/penals.module').then(m =>m.PenalsModule)
  },
  {
    path: 'minut1',
    loadChildren: () => import('./minut1/minut1.module').then(m =>m.Minut1Module)
  },
  {
    path: 'minut2',
    loadChildren: () => import('./minut2/minut2.module').then(m =>m.Minut2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
