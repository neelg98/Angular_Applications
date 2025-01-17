import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {

    this.employeeService.addEmployee(this.employeeForm.value);
    this.router.navigate(['home']);
  }

  onCancel() {
    this.router.navigate(['home']);
  }

  private initForm() {
    let employeeName = '';
    let employeeAge = '';
    let employeeMobile = '';
    let employeeCollege = '';
    let employeeSalary = '';
    let employeeManager = '';

    this.employeeForm = new FormGroup({
      'name' : new FormControl(employeeName, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      'age' : new FormControl(employeeAge, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mobile' : new FormControl(employeeMobile, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'college' : new FormControl(employeeCollege, Validators.required),
      'salary' : new FormControl(employeeSalary, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'manager' : new FormControl(employeeManager, Validators.required),
    });
  }

}
