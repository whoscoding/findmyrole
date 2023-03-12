import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';


@NgModule({
  declarations: [],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
