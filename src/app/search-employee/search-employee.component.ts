import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  empcode=""
  
  searchData:any=""
  
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid Employee code")
        }else{
          this.searchData=response
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>{
        console.log(generated);
      }
    )
  }

}


