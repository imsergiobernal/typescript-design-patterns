https://www.dofactory.com/javascript/abstract-factory-design-pattern
# Abstract Factory
## Definition
Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

Frequency of use (in Javascript): ![](https://www.dofactory.com/images/use_medium.gif) medium

## Summary
An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

Suppose we have two Abstract Factories whose task it is to create page controls, such as, buttons, textboxes, radio buttons, and listboxes. One is the Light Factory which creates controls that are white and the other the Dark Factory which creates controls that are black. Both Factories creates the same types of controls, but they differ in color, which is their common theme. This is an implementation of the Abstract Factory pattern.

Over time the Abstract Factory and Factory Method patterns have merged into a more general pattern called Factory. A Factory is simply an object that creates other objects.

You may be wondering why you would want to leave the responsibility of the construction of objects to others rather than simply calling a constructor function with the new keyword directly. The reason is that that constructor functions are limited in their control over the overall creation process and sometimes you will need to hand over control to a factory that has broader knowledge.

This includes scenarios in which the creation process involves object caching, sharing or re-using of objects, complex logic, or applications that maintain object and type counts, and objects that interact with different resources or devices. If your application needs more control over the object creation process, consider using a Factory.


## Diagram
Diagram TypeScript Abstract Factory Design Pattern  
![Diagram](https://www.dofactory.com/images/diagrams/javascript/javascript-abstract-factory.jpg)

## Participants
The objects participating in this pattern are: 

- AbstractFactory -- In sample code: AbstractFactory  
declares an interface for creating products  
- ConcreteFactory -- In sample code: EmployeeFactory, VendorFactory  
a factory object that 'manufactures' new products
the create() method returns new products
- Products -- In sample code: Employee, Vendor  
the product instances being created by the factory  
- AbstractProduct -- In sample code: AbstractProduct  
declares an interface for the products that are being created

## Sample code in TypeScript
Abstract classes and interfaces enforce consistent interfaces in derived classes.

In the example we have two Concrete Factories: EmployeeFactory and VendorFactory. The first one creates Employee instances, the second one Vendor instances. Both products are person types (with the same interface) which allows the client to treat them the same. An array with two employees and two vendors is created. Each person is then asked to say what and who they are.

The log function is a helper which collects and displays results.

