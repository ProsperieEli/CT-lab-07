const pool = require('../lib/utils/pool');
const twilio = require('twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const OrderService = require('../lib/services/OrderService');
const Order = require('../lib/models/Order');
const { sendSms } = require('../lib/utils/twilio');
jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn()
  }
}));

describe('03_separation-of-concerns-demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  beforeEach(async() => {
    return await Order.insert(6);
  });

  it('create a new order for text', async() => {

    const createOrder = await OrderService.createOrder(6);

    expect(createOrder).toEqual({ id:expect.any(String), quantity:6 });
  });

  it('update order for text', async() => {
    // await OrderService.createOrder(6);
    const updateOrder = await OrderService.updateOrder('1', 8);

    expect(updateOrder).toEqual({ id:'1', quantity:8 });
  });

  it('delete order for text', async() => {
    // await OrderService.createOrder(6);
    const deleteOrder = await OrderService.delete('1');

    expect(deleteOrder).toEqual({ id: '1', quantity: 6 });
  });
});
