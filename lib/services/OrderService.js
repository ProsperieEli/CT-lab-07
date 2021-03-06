const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  static async createOrder(quantity) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${quantity}`
    );

    const order = await Order.insert(quantity);
    // order.id === some string
    // order.quantity === quantity

    return order;
  }

  static async updateOrder(id, quantity) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Updated Order received for ${quantity}`
    );

    const updateOrder = await Order.update(id, quantity);

    return updateOrder;
  }

  static async delete(id) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Delete Order received from ${id}`
    );

    const deleteOrder = await Order.delete(id);

    return deleteOrder;
  }
};
