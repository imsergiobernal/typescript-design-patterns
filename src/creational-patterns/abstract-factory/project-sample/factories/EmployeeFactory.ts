import { AbstractFactory } from './AbstractFactory';
import { Employee } from './../products/Employee';

export class EmployeeFactory extends AbstractFactory {

  public create(name: string): Employee {
    return new Employee(name);
  }
}
