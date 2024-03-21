import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns get all pets
   */

  getPets() {
    const endpoint = `${base_url}/pets`;
    return this.http.get(endpoint);
  }

  /**
* 
* @returns save pets
*/

  savePet(body: any) {  
    const endpoint = `${base_url}/pets`;
    return this.http.post(endpoint, body);
  }


  /**
  * 
  * @returns update pet
  */

  updatePet(body: any, id: any) {
    const endpoint = `${base_url}/pets/${id}`;
    return this.http.put(endpoint, body);
  }

  /**
  * 
  * @returns delete pet
  */

  deletePet(id: any) {
    const endpoint = `${base_url}/pets/${id}`;
    return this.http.delete(endpoint);
  }

}
