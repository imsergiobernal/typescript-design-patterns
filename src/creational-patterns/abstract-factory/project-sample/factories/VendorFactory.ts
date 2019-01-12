import { AbstractFactory } from './AbstractFactory';
import { Vendor } from './../products/Vendor';

export class VendorFactory extends AbstractFactory {

  public create(name: string): Vendor {
    return new Vendor(name);
  }
}
