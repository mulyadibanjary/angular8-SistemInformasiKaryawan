import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';


const routes: Routes = [
  { path:'',redirectTo:'employees',pathMatch:'full'},
  { path:'employees',component:EmployeeListComponent},
  { path:'add',component:EmployeeCreateComponent},
  { path:'edit/:id',component:EmployeeUpdateComponent},
  { path:'detail/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
