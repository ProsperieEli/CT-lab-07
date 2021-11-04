const { Router } = require('express');
const OrderService = require('../services/OrderService');

module.exports = Router()
  // if (req.method === 'POST' && req.url === '/api/v1/orders/')
  .post('/', async(req, res, next) => {
    try {
      // req.body === { quantity: 10 }
      const order = await OrderService.createOrder(req.body.quantity);
      // order === { id: '1', quantity: 10 }

      res.send(order);
    } catch(err) {
      next(err);
    }
  });
// .get('/:id', async(req, res, next) => {
//   try {
//     const { id } = req.params;

//     res.send(id);
//   } catch(err) {
//     next(err);
//   }
// })

// .patch('/:id', async(req, res, next) => {
//   try {
//     const { id } = [req.params.id];
//     const order = await OrderService.patchOrder(id);

//     res.send()
//   }catch(err) {
//     next(err);
//   }
// })

// .delete('/:id', async(req, res, next) => {
//   try{
//     const
//   }
// })


// .get('', async(req, res, next) => {
//   try {
//     const getAll = 
//   }
// })

