import { Component, OnInit } from '@angular/core';
import { EmpployeesService } from '../empployees.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 // variable yang merupakan array dari employee
  employeeList:Observable<Employee[]>;

  //didalam constructor kita mendeklarasikan router dan service
  constructor(private employeeService:EmpployeesService,private router:Router) { }

  // ini adalah function untuk menginisialisasi field employee dari rest api
  reloadData(){
      this.employeeList=this.employeeService.getEmployeeList();
  }
  // ini adalah function yang otomatis di eksekusi ketika load aplikasi
  ngOnInit() {
    this.reloadData();
  }

  //membuat function ke halaman details

  goToDetail(id : number){
    this.router.navigate(['detail',id]);
  }
//membuat function ke halaman Edit
  goToEdit(id : number){
    this.router.navigate(['edit',id]);
  }
//membuat function hapus data

    deleteData(id : number){
      this.employeeService.deleteEmployee(id).subscribe(
        data=>{
          console.log(data);
          this.reloadData();
        },
        error=>console.log(error)
        
      );
    }
}