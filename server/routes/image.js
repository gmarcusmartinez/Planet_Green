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
  uploadImages,
} from '../controllers/products.js';
import { uploadImageMiddleware } from '../middlewares/imageUpload.js';

const router = express.Router();
router
  .route('/uploadImage')
  .post(
    currentUser,
    requireAuth,
    authorizeAdmin,
    uploadImageMiddleware,
    uploadImages
  );
router
  .route('/deleteImage/:filename')
  .put(
    currentUser,
    requireAuth,
    authorizeAdmin,
    uploadImageMiddleware,
    deleteSingleImage
  );

export { router as imagesRouter };
