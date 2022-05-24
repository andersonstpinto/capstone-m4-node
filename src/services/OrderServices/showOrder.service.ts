import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";
import { AppError } from "../../errors/index";

export default class ShowOrderService {
  async execute(orderId: string): Promise<ServiceOrder> {
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);

    const order = await serviceOrderRepository.findOne({
      where: { id: orderId },
    });

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    return order;
  }
}
