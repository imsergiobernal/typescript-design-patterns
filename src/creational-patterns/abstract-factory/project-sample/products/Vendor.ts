import { AbstractProduct } from './AbstractProduct';
import { Log } from './../../../../utils/Log';

export class Vendor extends AbstractProduct {

  constructor(name: string) {
    super(name);
  }

  public say(): void {
    Log.add(`I'm vendor ${this.name}`);
  }
}
