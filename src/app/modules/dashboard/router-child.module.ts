import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicinesComponent } from '../medicines/components/medicines/medicines.component';
import { ClientsComponent } from '../clients/components/clients/clients.component';
import { PetComponent } from '../pet/components/pet/pet.component';


const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'medicines', component: MedicinesComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'pet', component: PetComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }

