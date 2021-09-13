import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpployeesService {

  private baseURL='http://belajaroracle.com/hrapi/emp1';
  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any>{
		return this.http.get(`${this.baseURL}/read.php`);
	}

  deleteEmployee(id:number):Observable<any>{
		return this.http.get(`${this.baseURL}/delete.php?id=${id}`);
	}

  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/find.php?id=${id}`);
  }

  updateEmployee(id:number,value:any):Observable<any>{
    return this.http.post(`${this.baseURL}/update.php?`,value);
  }

  createEmployee(value:Object):Observable<object>{
    return this.http.post(`${this.baseURL}/insert.php?`,value);
  }


}
