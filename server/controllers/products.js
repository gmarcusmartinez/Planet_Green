import { Product } from '../models/Product.js';
import { CustomError } from '../errors/CustomError.js';
import { asyncHandler } from '../middlewares/async.js';

export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).send(product);
});

export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new CustomError('Product not found.', 404));

  res.status(200).send(product);
});

export const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) return next(new CustomError('Product not found.', 404));

  res.status(200).send(product);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) return next(new CustomError('Product not found.', 404));

  product = await Product.findByIdAndDelete(req.params.id);
  res.status(204).send({ message: 'Product Deleted' });
});
