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
}

