const pool = require('../lib/utils/pool');
const twilio = require('twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const   Order  = require('../lib/models/Order');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn()
  }
}));

describe('03_separation-of-concerns-demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('creates a new order', async() => {
    
    const insert = await Order.insert(6);

    expect(insert).toEqual({ id:'1', quantity: 6 });
  });

  //   it('gets id orders', async() => {
    
  //     const insert = await Order.getById('1');

  //     expect(insert).toEqual({ id:'1', quantity: 6 });
  //   });


});
