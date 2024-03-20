import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  displayedColumns: string[] = ['id', 'name', 'breed', 'age', 'weight', 'client', 'actions'];
  dataSource = new MatTableDataSource<PetElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 

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

      let listPets = response.petResponse.pets;

      listPets.forEach((element: PetElement) => {
        element.client = element.client.name;
        dataPet.push(element);
      });

      this.dataSource = new MatTableDataSource<PetElement>(dataPet);
      this.dataSource.paginator = this.paginator;


    }

  }

}

export interface PetElement {
  id: number;
  name: string;
  breed: string;
  age: number;
  weight: number;
  client: any;
}
