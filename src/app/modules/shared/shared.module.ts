import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmclientComponent } from './components/confirmclient/confirmclient.component';
import { ConfirmpetComponent } from './components/confirmpet/confirmpet.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ConfirmComponent,
    ConfirmclientComponent,
    ConfirmpetComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
