import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './components/pet/pet.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPetComponent } from './new-pet/new-pet.component';



@NgModule({
  declarations: [
    PetComponent,
    NewPetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PetModule { }
