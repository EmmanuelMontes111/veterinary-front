import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MedicinesModule } from '../medicines/medicines.module';
import { ClientsModule } from '../clients/clients.module';
import { PetModule } from '../pet/pet.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MedicinesModule,
    ClientsModule,
    PetModule
  ]
})
export class DashboardModule { }
