import { Component, OnInit, inject } from '@angular/core';
import { PetService } from 'src/app/modules/shared/services/pet/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit{

  private petService = inject(PetService);

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe( (data:any) => {

      console.log("Respuesta de mascotas: ", data);

    }, (error: any) => {
      console.log("error: ", error);
    })
  }
}
