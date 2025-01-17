export class Employee {
    public name: string;
    public age: number;
    public mobile: number;
    public college: string;
    public salary: number;
    public manager: string;

    constructor(name: string, age: number, mobile: number, college: string, salary: number, manager: string) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.college = college;
        this.salary = salary;
        this.manager = manager;
    }
}