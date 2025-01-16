// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  // Parameters dictate what kind of vehicle can be towed
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get information of potential vehicle to be towed
    const towed = 
    vehicle.make && vehicle.model ? `${vehicle.make} ${vehicle.model}` 
    : 'unidentified vehicle';
    // Check if the vehicle's weight is less than or equal to the truck's towing capacity; Can it be towed?
    vehicle.weight <= this.towingCapacity ?
    console.log(`The ${towed} is now being towed`)
    : console.log(`The ${towed} is too heavy to be towed`);
  }

  // Overrides the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    // Logs the details of the Truck
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length} ${this.wheels[0].getTireBrand} tires sized to ${this.wheels[0].getDiameter} inches`);
  }
}

// Export the Truck class as the default export
export default Truck;
