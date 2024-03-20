import { Component, OnInit, inject } from '@angular/core';
import { MedicinesService } from 'src/app/modules/shared/services/medicines/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit{

  private medicineService = inject(MedicinesService);

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines(): void {
    this.medicineService.getMedicines()
    .subscribe( (data:any) => {

      console.log("Respuesta de medicinas: ", data);

    }, (error: any) => {
      console.log("error: ", error);
    })
  }
}
