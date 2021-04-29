import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {EmployeeService}from '../employee.service';
import {Employee} from '../employee';
import {editDialogue} from '../editDialogue/editDialogue.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Output() crudOperation:EventEmitter<Object> = new EventEmitter<Object>();

  reports: Employee[] = [];
  numReports:number = 0;
  employeeService:EmployeeService;
  matDialog:MatDialog;

  constructor(employeeService:EmployeeService, public dialog:MatDialog)  {

  this.employeeService = employeeService;
  this.matDialog = dialog;
  }
    ngOnInit(){
      this.updateReports();
    }

    updateReports(){
      //check if the employee has any direct reports
      if(this.employee.directReports !== undefined){
        //if they do add it to the count of reports
        this.numReports+= this.employee.directReports.length;
        //for each direct report get the employee
      this.employee.directReports.forEach((reportID)=>{
        this.employeeService.get(reportID).subscribe(child=>{
          //Store it in the reports array
          this.reports.push(child);
          //check if the child has any direct reports
          if(child.directReports!== undefined){
            //if they do add to the number of reports
            this.numReports+= child.directReports.length;
            //add each direct report of child to the reports array
            child.directReports.forEach((childReportID)=>{
              this.employeeService.get(childReportID).subscribe(child2=>{
               this.reports.push(child2);
              })
            })
          }
        })
      })
    }
    this.employee.reports= this.reports;

    }
    editEmployee(id){
      //get the employee data from the id
      this.employeeService.get(id).subscribe(employee=>{
        //open the edit dialog bog
      let dialogRef = this.dialog.open(editDialogue,{
        width: '300px',
        data:{
          employee:employee,
          opType:'edit'
        }
        })
        //when the box is closed send off the new employee data to edit event
        dialogRef.afterClosed().subscribe(result => {
          this.crudOperation.emit({
          operationType: 'edit',
          employee: result,
        })
        });

      });

    }

    deleteEmployee(id){
      //get employee by ID
      this.employeeService.get(id).subscribe(employee=>{
        //open delete dialog box
       let dialogRef = this.dialog.open(editDialogue,{
        width: '300px',
        data:{
          employee:employee,
          opType:'delete'
        }
        });
        //fire delete event when dialog is closed
        dialogRef.afterClosed().subscribe(result => {
          this.crudOperation.emit({
            operationType: 'delete',
            employee: result
         })
        });
      });
    }
}
