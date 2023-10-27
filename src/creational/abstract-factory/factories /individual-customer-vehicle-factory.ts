import { IndividualCar } from "../vehicle/individual-car";
import { Customer } from "../customer/customer";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";
import { IndividualCustomer } from "../customer/individual-customer";

export class IndividualCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }

    createVehicle(vehicle: string, customerName: string): VehicleProtocol {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicle, customer);
    }
}