// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }
  
  wheelie(): void {
    console.log(`${this.make} ${this.model} is doing a wheelie!`);
  }

  // Overrides the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
  // Logs the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Front Wheel: ${this.wheels[0].getDiameter} inch ${this.wheels[0].getTireBrand} tire`);
    console.log(`Rear Wheel: ${this.wheels[1].getDiameter} inch ${this.wheels[1].getTireBrand} tire`); 
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
