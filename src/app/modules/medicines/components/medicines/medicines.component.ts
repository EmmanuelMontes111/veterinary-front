import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MedicinesService } from 'src/app/modules/shared/services/medicines/medicines.service';
import { NewMedicineComponent } from '../new-medicine/new-medicine.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  private medicineService = inject(MedicinesService);
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

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
  
  openMedicineDialog() {
    const dialogRef = this.dialog.open(NewMedicineComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Medicina Agregada", "Exitoso");
        this.getMedicines();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al guardar la medicina", "ERROR");
      }
    });

  }


  edit(id: number, name: string, description: string, dose: string){
    const dialogRef = this.dialog.open(NewMedicineComponent, {
      width: '450px',
      data: {id:id, name: name, description: description, dose: dose}
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Medicina Actualizada", "Exitoso");
        this.getMedicines();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al actualizar la medicina", "ERROR");
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 200
    })
  }

  delete(id: any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {id:id}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
  
      if (result = 1) {
        this.openSnackBar("Medicina Eliminada", "Exitoso");
        this.getMedicines();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al eliminar la medicina", "ERROR");
      }
  
    });
  }

}

export interface MedicineElement {
  id: number;
  name: string;
  description: string;
  dose: string;
}
