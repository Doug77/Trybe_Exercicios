const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

router.get('/get-by-id/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).send(product);
});

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(200).send(newProduct);
});

router.delete('/delete-user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(200).send(products);
});

router.put('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).send(products);
});

module.exports = router;