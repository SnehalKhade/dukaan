import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { CartsComponent } from './carts/carts.component';


@NgModule({
  declarations: [CartsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
