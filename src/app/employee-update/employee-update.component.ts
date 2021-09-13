import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmpployeesService } from '../empployees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  id : number;
  employee : Employee;
   constructor(private route:ActivatedRoute,private router:Router, private employeeService:EmpployeesService) { }
 

   ngOnInit() {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      data=>{
        console.log(data);
        this.employee=data;
      },
      error=>console.log(error)
    );
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(
      data=>{
        console.log(data);
        this.goToList();
      }
    );
  }

onSubmit(){
  this.updateEmployee();
}

  goToList(){
    this.router.navigate(['employees']);
  }

}
