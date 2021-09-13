import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmpployeesService } from '../empployees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee : Employee;
  telahSubmit =false;
   constructor(private router:Router, private employeeService:EmpployeesService) { }


  ngOnInit() {
    this.employee=new Employee();
  }

  save(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data=>{
        console.log(data);
        this.goToList();
      },
      error=>console.log(error)
    );
  }

  onSubmit(){
    this.telahSubmit=true;
    this.save();
  }

  goToList(){
    this.router.navigate(['employees']);
  }

}
