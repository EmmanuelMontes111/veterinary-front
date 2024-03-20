import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns get all medicines
   */
  getMedicines() {
    const endpoint = `${base_url}/medicines`;
    return this.http.get(endpoint);
  }

  /**
* 
* @returns save medicine
*/

  saveMedicine(body: any) {
    const endpoint = `${base_url}/medicines`;
    return this.http.post(endpoint, body);
  }


  /**
* 
* @returns update medicine
*/

  updateClient(body: any, id: any) {
    const endpoint = `${base_url}/medicines/${id}`;
    return this.http.put(endpoint, body);
  }

}
