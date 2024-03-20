import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsService } from 'src/app/modules/shared/services/clients/clients.service';
import { NewClientComponent } from '../new-client/new-client.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmclientComponent } from 'src/app/modules/shared/components/confirmclient/confirmclient.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private medicineService = inject(ClientsService);
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.getClients();
  }

  displayedColumns: string[] = ['clientId', 'name', 'lastName', 'residenceAddress', 'phoneNumber', 'actions'];
  dataSource = new MatTableDataSource<ClientElement>();


  getClients() {
    this.medicineService.getClients()
      .subscribe((data: any) => {

        console.log("Respuesta de clientes: ", data);
        this.processClientsResponse(data);
      }, (error: any) => {
        console.log("error: ", error);
      })
  }

  processClientsResponse(response: any) {

    const dataClient: ClientElement[] = [];

    if (response.metadata[0].code = "200") {

      let listClient = response.clientResponse.clients;

      listClient.forEach((element: ClientElement) => {
        dataClient.push(element);
      });

      this.dataSource = new MatTableDataSource<ClientElement>(dataClient);


    }
  }

  openClientDialog() {
    const dialogRef = this.dialog.open(NewClientComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Cliente Agregado", "Exitoso");
        this.getClients();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al guardar el cliente", "ERROR");
      }

    });
  }


  edit(id: number ,clientId: number, name: string, lastName: string, residenceAddress: string, phoneNumber: string) {
    const dialogRef = this.dialog.open(NewClientComponent, {
      width: '450px',
      data: {id:id, clientId: clientId, name: name, lastName: lastName, residenceAddress: residenceAddress, phoneNumber: phoneNumber}
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Cliente Actualizado", "Exitoso");
        this.getClients();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al actualizar el cliente", "ERROR");
      }

    });
  }

  delete(id: any){
    const dialogRef = this.dialog.open(ConfirmclientComponent, {
      width: '450px',
      data: {id:id}
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Cliente Eliminado", "Exitoso");
        this.getClients();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al eliminar el cliente", "ERROR");
      }

    });
  }


  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 200
    })
  }

}

export interface ClientElement {
  id: number;
  clientId: number;
  name: string;
  lastName: string;
  residenceAddress: string;
  phoneNumber: number;
}