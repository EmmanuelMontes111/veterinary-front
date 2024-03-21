import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PetService } from 'src/app/modules/shared/services/pet/pet.service';
import { NewPetComponent } from '../../new-pet/new-pet.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmpetComponent } from 'src/app/modules/shared/components/confirmpet/confirmpet.component';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  private petService = inject(PetService);
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.getPets();
  }

  displayedColumns: string[] = ['id', 'name', 'breed', 'age', 'weight', 'client', 'actions'];
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

      let listPets = response.petResponse.pets;

      listPets.forEach((element: PetElement) => {
        //element.client = element.client.name;
        dataPet.push(element);
      });

      this.dataSource = new MatTableDataSource<PetElement>(dataPet);


    }

  }



  openPetDialog() {
    const dialogRef = this.dialog.open(NewPetComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Mascota Agregada", "Exitoso");
        this.getPets();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al guardar la mascota", "ERROR");
      }
    });

  }


  edit(id: number, name: string, breed: string, age: number, weight: number, client: number) {
    const dialogRef = this.dialog.open(NewPetComponent, {
      width: '450px',
      data: { id: id, name: name, breed: breed, age: age, weight: weight, client: client }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Mascota Actualizada", "Exitoso");
        this.getPets();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al actualizar la mascota", "ERROR");
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 400
    })
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmpetComponent, {
      width: '450px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result = 1) {
        this.openSnackBar("Mascota Eliminada", "Exitoso");
        this.getPets();
      } else if (result = 2) {
        this.openSnackBar("Se produjo un error al eliminar la mascota", "ERROR");
      }

    });
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
