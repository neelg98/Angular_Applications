import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
 
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.employeeService.employeesChanged
      .subscribe(
        (employees: Employee[]) => {
          this.employees = employees;
        }
      );
    this.employees = this.employeeService.getEmployees();
  }

  onAddEmployee() {
    this.router.navigate(['add']);
  }

  onSaveData() {
    this.dataStorageService.storeEmployees();
  }

  onFetchData() {
    this.dataStorageService.fetchEmployees();
  }
}
