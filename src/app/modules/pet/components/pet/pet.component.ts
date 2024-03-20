import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PetService } from 'src/app/modules/shared/services/pet/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  private petService = inject(PetService);

  ngOnInit(): void {
    this.getPets();
  }

  displayedColumns: string[] = ['id', 'name', 'breed', 'age', 'weight', 'actions'];
  dataSource = new MatTableDataSource<PetElement>();

  getPets() {
    this.petService.getPets()
      .subscribe((data: any) => {

        console.log("Respuesta de mascotas: ", data);
        this.processPetsResponse(data);
      }, (error: any) => {
        console.log("error: ", error);
      })
  }

  processPetsResponse(response: any) {

    const dataPet: PetElement[] = [];

    if (response.metadata[0].code = "200") {

      let listClient = response.clientResponse.clients;

      listClient.forEach((element: PetElement) => {
        dataPet.push(element);
      });

      this.dataSource = new MatTableDataSource<PetElement>(dataPet);


    }

  }

}

export interface PetElement {
  id: number;
  name: string;
  breed: string;
  age: number;
  weight: number;
}
