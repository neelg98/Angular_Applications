import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee.model';

export class EmployeeService {

    employeesChanged = new Subject<Employee[]>();
    employeeSelected = new EventEmitter<Employee>();

    private employees: Employee[] = [
        new Employee('Ayush Shah', 22, 8879817727, 'Shah & Anchor Kutchhi Engineering College', 20362, 'Mr Subhodip Sengupta'),
        new Employee('Deepak Maurya', 22, 9768940816, 'Xavier Institute of Technology', 20362, 'Mr Jitendra Rana'),
        new Employee('Harsh Panchal', 22, 9920443985, 'Shah & Anchor Kutchhi Engineering College', 20362, 'Mr Jitendra Rana'),
        new Employee('Neel Gohil', 22, 9619174385, 'Shah & Anchor Kutchhi Engineering College', 20362, 'Mr Shivshankar Shet'),
        new Employee('Rutash Joshipura', 22, 9930625975, 'Don Bosco Institute of Technology', 20362, 'Mr Sourabh Chatterjee')
    ];

    setEmployees(employees: Employee[]) {
        this.employees = employees;
        this.employeesChanged.next(this.employees.slice());
    }

    getEmployees() {
        return this.employees.slice();
    }

    getEmployee(index: number) {
        return this.employees[index];
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
        this.employeesChanged.next(this.employees.slice());
    }


}