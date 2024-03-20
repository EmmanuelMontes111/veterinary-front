import { Component, OnInit, inject } from '@angular/core';
import { ClientsService } from 'src/app/modules/shared/services/clients/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  private medicineService = inject(ClientsService);

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.medicineService.getClients()
    .subscribe( (data:any) => {

      console.log("Respuesta de clientes: ", data);

    }, (error: any) => {
      console.log("error: ", error);
    })
  }
}
