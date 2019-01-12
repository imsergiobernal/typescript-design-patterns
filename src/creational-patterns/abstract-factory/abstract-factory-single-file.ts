import { Log } from '../../utils/Log';

abstract class AbstractFactory {

  abstract create(name: string): any;
}


abstract class AbstractProduct {

  constructor(public name: string) {
    this.name = name;
  }

  public abstract say(): void;
}

class Employee extends AbstractProduct {

  constructor(name: string) {
    super(name);
  }

  public say(): void {
    Log.add(`I'm an employee ${this.name}`);
  }
}

class EmployeeFactory extends AbstractFactory{

  public create(name: string): Employee {
    return new Employee(name);
  }
}

class Vendor extends AbstractProduct {

  constructor(name: string) {
    super(name);
  }

  public say(): void {
    Log.add(`I'm vendor ${this.name}`);
  }
}

class VendorFactory extends AbstractFactory {

  public create(name: string): Vendor {
    return new Vendor(name);
  }
}

(() => {
  const persons: any[] = [];
  const employeeFactory = new EmployeeFactory();
  const vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create("Joan DiSilva"));
  persons.push(employeeFactory.create("Tim O'Neill"));
  persons.push(vendorFactory.create("Gerald Watson"));
  persons.push(vendorFactory.create("Nicole McNight"));

  for (const person of persons) {
    person.say();
  }

  Log.show();
})();
