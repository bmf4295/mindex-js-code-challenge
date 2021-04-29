import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';

import {editDialogue} from './editDialogue.component';

const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef',  {
  id: 1,
  firstName: 'Brian',
  lastName: 'McGee',
  position: 'CEO',
  directReports: [2, 3]
});
describe('editDialogue',()=>{
beforeEach( async(()=>{
TestBed.configureTestingModule({
  declarations:[editDialogue]
}).compileComponents();
}))
//This fails because of a null injection error, but it gets injected on the main page
it('should create the component',async(()=>{
  const fixture = TestBed.createComponent(editDialogue);
  const comp = fixture.debugElement.componentInstance;
  expect(comp).toBeTruthy();
}));
});



