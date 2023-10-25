import { Customer } from "../customer/customer";
import { Vehicle } from "../../factories-method/vehicle/vehicle";

export interface CreateVehicleCustomerFactory {
    createCustomer(customer: string): Customer;
    createVehicle(vehicleName: string, customer: string): Vehicle;
}