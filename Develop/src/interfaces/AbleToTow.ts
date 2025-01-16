// import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// defines the interface
interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes vehicle types as arguments
    tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;
