import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsService } from 'src/app/modules/shared/services/clients/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private medicineService = inject(ClientsService);

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

}

export interface ClientElement {
  id: number;
  clientId: number;
  name: string;
  lastName: string;
  residenceAddress: string;
  phoneNumber: number;
}