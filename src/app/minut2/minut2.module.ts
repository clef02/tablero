import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Minut2RoutingModule } from './minut2-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    Minut2RoutingModule,
    FormsModule

  ]
})
export class Minut2Module { }
