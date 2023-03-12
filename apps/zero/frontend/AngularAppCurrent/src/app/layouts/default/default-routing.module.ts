import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ENV } from '@env/environment';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

const routes: Routes = [

  {
    path:"",
    component:DefaultLayoutComponent,
    children:[
      {
        path:"",
        loadChildren:() => import("../../pages/home/home.module").then(m=>m.HomeModule)
      },
      {
        path:"sample",
        loadChildren:() => import("../../pages/sample/sample.module").then(m=>m.SampleModule)
      },
      {
        path:"profile",
        loadChildren:() => import("../../pages/profile-one/profile-one.module").then(m=>m.ProfileOneModule)
      },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
