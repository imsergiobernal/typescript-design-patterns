import { EmployeeFactory } from './factories/EmployeeFactory';
import { VendorFactory } from './factories/VendorFactory';
import { Log } from '../../../utils/Log';

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
