import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
