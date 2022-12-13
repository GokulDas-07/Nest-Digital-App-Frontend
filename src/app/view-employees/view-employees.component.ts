import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {
  constructor(private api:ApiService){
    api.viewAllEmployees().subscribe(
      (response:any)=>{
        this.data=response;
      }

    )
  }
  data:any=[]


}
