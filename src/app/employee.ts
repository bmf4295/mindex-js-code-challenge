export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  compensation?: number;
  reports?:Array<Employee>;
  directReports?: Array<number>;
}
