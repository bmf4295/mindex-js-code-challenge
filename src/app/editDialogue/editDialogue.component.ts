import { Component, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Employee } from '../employee';
@Component({
  selector: 'edit-dialogue',
  templateUrl: './editDialogue.component.html',
  styleUrls: ['./editDialogue.component.css']
})
export class editDialogue {
  employee:Employee;
  opType:string = "";

  constructor(
    public dialogRef: MatDialogRef<editDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: { opType: string, employee: Employee}) {
      this.opType = data.opType;
      this.employee = data.employee;
    }

  closeDialog() :void {
    this.dialogRef.close();
  }


}
