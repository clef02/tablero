import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaRoutingModule } from './vista-routing.module';
import { HomeComponent } from './home/home.component';
import { RelogService } from '../shared/relog.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VistaRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    RelogService
  ]
})
export class VistaModule { }
