import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private employeeService: EmployeeService) {}

    storeEmployees() {
        const employees = this.employeeService.getEmployees();
        this.http.put('https://employee-application-7a974-default-rtdb.firebaseio.com/employees.json', employees).subscribe(response => {
            console.log(response);
        });
    }

    fetchEmployees() {
        this.http.get<Employee[]>('https://employee-application-7a974-default-rtdb.firebaseio.com/employees.json')
          .subscribe(employees => {
              this.employeeService.setEmployees(employees);
          });
    }
}