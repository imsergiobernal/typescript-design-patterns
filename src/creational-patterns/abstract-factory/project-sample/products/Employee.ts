import { AbstractProduct } from './AbstractProduct';
import { Log } from './../../../../utils/Log';

export class Employee extends AbstractProduct {

  constructor(name: string) {
    super(name);
  }

  public say(): void {
    Log.add(`I'm an employee ${this.name}`);
  }
}
