import express from 'express';
import { Product } from '../models/Product.js';
import { currentUser } from '../middlewares/current-user.js';
import { requireAuth } from '../middlewares/require-auth.js';
import { authorizeAdmin } from '../middlewares/authorizeAdmin.js';
import { advancedResults } from '../middlewares/advanced-results.js';

import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteSingleImage,
} from '../controllers/products.js';
import { uploadImageMiddleware } from '../middlewares/imageUpload.js';
import { productValidation } from '../validation/product-validation.js';
import { validateRequest } from '../middlewares/validate-request.js';

const router = express.Router();

router
  .route('/')
  .get(currentUser, advancedResults(Product), getProducts)
  .post(
    currentUser,
    requireAuth,
    authorizeAdmin,
    productValidation,
    validateRequest,
    uploadImageMiddleware,
    createProduct
  );
router
  .route('/:id')
  .get(currentUser, getProduct)
  .put(
    currentUser,
    requireAuth,
    uploadImageMiddleware,
    authorizeAdmin,
    updateProduct
  )
  .delete(currentUser, requireAuth, authorizeAdmin, deleteProduct);
router
  .route('/:id/:filename')
  .put(currentUser, requireAuth, authorizeAdmin, deleteSingleImage);

export { router as productRouter };
