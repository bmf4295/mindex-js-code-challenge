import {Component, OnInit} from '@angular/core';

import {catchError, map, reduce, repeat} from 'rxjs/operators';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getAll()
      .pipe(
        reduce((emps, e: Employee) => emps.concat(e), []),
        map(emps => this.employees = emps),
        catchError(this.handleError.bind(this))
      ).subscribe();
  }

  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to retrieve employees';
  }

  doCrudOp(response){
    if(response.operationType === 'edit'){

     return  this.updateEmployee(response.employee);
    }
      this.deleteEmployee(response.employee);


  }

  updateEmployee(employeeToUpdate){
    //Save the Employee using employee services
    this.employeeService.save(employeeToUpdate).subscribe(res=>{
      //go through each employee
      this.employees.forEach(emp=>{
        if(emp.id === res.id){
          //if they are the employee that was updated, model the compensation
          emp.compensation = res.compensation;
        }
        if(emp.reports!== undefined){
          emp.reports.forEach(e=>{
            if(e.id === res.id){
              //if they report to anyone, model it in the report component too
              e.compensation = res.compensation;
            }
          })
        }
      })
    });

  }
  deleteEmployee(employeeToDelete){
    //delete the employee
   this.employeeService.remove(employeeToDelete);
   this.employees.forEach(emp=>{

    if(emp.directReports !== undefined){
      //filter out any instances of deleted employee in each direct report
     emp.directReports = emp.directReports.filter(report=>report !== emp.id)
    }
    //same for the reports component
    emp.reports = emp.reports.filter(e=>e.id !== employeeToDelete.id);

  })
  // finally filter them out of the employees array
  this.employees= this.employees.filter(emp=> emp.id !== employeeToDelete.id)
  }

}
