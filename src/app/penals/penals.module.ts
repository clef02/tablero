import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenalsRoutingModule } from './penals-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PenalsRoutingModule,
    FormsModule
  ]
})
export class PenalsModule { }
