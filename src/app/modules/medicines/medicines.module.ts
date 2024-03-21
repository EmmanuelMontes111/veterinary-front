import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMedicineComponent } from './components/new-medicine/new-medicine.component';



@NgModule({
  declarations: [
    MedicinesComponent,
    NewMedicineComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicinesModule { }
