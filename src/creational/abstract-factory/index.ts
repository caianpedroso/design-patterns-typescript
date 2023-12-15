import { EnterpriseCustomerVehicleFactory } from "./factories /enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories /individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Gol', 'Carlos');
const car2 = individualFactory.createVehicle('Uno', 'Pedro');

car1.pickUp();
car2.pickUp();
