import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";

export default class listOrderService {
  async execute(): Promise<ServiceOrder[]> {
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);
    const orders = await serviceOrderRepository.find();

    return orders;
  }
}
