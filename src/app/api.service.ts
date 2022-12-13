import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployees=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",dataToSend)
  }
  searchEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  deleteEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataToSend)
  }
}
