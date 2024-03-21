import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns get all clients
   */

  getClients() {
    const endpoint = `${base_url}/clients`;
    return this.http.get(endpoint);
  }


  /**
 * 
 * @returns save client
 */

  saveClient(body: any) {
    const endpoint = `${base_url}/clients`;
    return this.http.post(endpoint, body);
  }


  /**
* 
* @returns update client
*/

  updateClient(body: any, id: any) {
    const endpoint = `${base_url}/clients/${id}`;
    return this.http.put(endpoint, body);
  }

   /**
  * 
  * @returns delete client
  */

   deleteClient(id: any) {
    const endpoint = `${base_url}/clients/${id}`;
    return this.http.delete(endpoint);
  }

   /**
  * 
  * @returns find id client
  */

   findByIdClient(id: any) {
    const endpoint = `${base_url}/clients/${id}`;
    return this.http.get(endpoint);
  }

}

