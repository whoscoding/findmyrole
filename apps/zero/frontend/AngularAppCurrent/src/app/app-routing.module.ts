import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:"",
    loadChildren: () => import("./layouts/default/default.module").then(m=>m.DefaultModule),
  },
  {
    path: '**',
    loadComponent: () => import("./core/not-found/not-found.component").then(m =>m.NotFoundComponent)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,


  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
