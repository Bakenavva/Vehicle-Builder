// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Array for vehicle storage
const vehicles = [];

// creates a truck to start off with
const truck1 = new Truck(
  Cli.generateVin(),
  "red", 
  "Ford", 
  "F-150", 
  2021, 
  5000, 
  120, 
  [], 
  10000
);

// creates a car to start off with
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// creates a motorbike to start off with
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];  // Initializes wheels for motorbike
const motorbike1 = new Motorbike(
  Cli.generateVin(), 
  "black", 
  "Harley Davidson", 
  "Sportster", 
  2021, 
  500, 
  125, 
  motorbike1Wheels);

// pushes vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
