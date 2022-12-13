import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empcode=""
  name=""
  designation=""
  phone=""
  mail=""
  password=""

constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"designation":this.designation,"phone":this.phone,"mail":this.mail,"password":this.password}
    console.log(data)
    this.api.addEmployees(data).subscribe(
      (response:any)=>{
        this.data=response;
        alert("Employee Added")
      }
    )
  }
  data:any=[]


}
