import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"addemp",component:AddEmployeeComponent},
  {path:"searchemp",component:SearchEmployeeComponent},
  {path:"viewemp",component:ViewEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
