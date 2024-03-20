import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MedicinesService } from 'src/app/modules/shared/services/medicines/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  private medicineService = inject(MedicinesService);

  ngOnInit(): void {
    this.getMedicines();
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'dose', 'actions'];
  dataSource = new MatTableDataSource<MedicineElement>();

  getMedicines() {
    this.medicineService.getMedicines()
      .subscribe((data: any) => {

        console.log("Respuesta de medicinas: ", data);
        this.processMedicinesResponse(data);
      }, (error: any) => {
        console.log("error: ", error);
      })
  }


  processMedicinesResponse(response: any) {

    const dataMedicine: MedicineElement[] = [];

    if (response.metadata[0].code = "200") {

      let listMedicine = response.medicineResponse.medicines;

      listMedicine.forEach((element: MedicineElement) => {
        dataMedicine.push(element);
      });

      this.dataSource = new MatTableDataSource<MedicineElement>(dataMedicine);


    }

  }

}

export interface MedicineElement {
  id: number;
  name: string;
  description: string;
  dose: string;
}
