export abstract class AbstractProduct {

  constructor(public name: string) {
    this.name = name;
  }

  public abstract say(): void;
}