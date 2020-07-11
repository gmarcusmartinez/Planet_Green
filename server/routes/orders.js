// tried to set order routes
import express from 'express';
import {
    currentUser
} from '../middlewares/current-user.js';
import {
    requireAuth
} from '../middlewares/require-auth.js';
import {
    authorizeAdmin
} from '../middlewares/authorizeAdmin.js';

// import {
//     getOrders,
//     getOneOrder,
//     getOrderByUserId,
//     createOrder,
//     updateOrder,
//     deleteOneOrder,
// } from '../controllers/orders.js';


const router = express.Router();

// router
//     .route('/all')
//     .get(currentUser, requireAuth, authorizeAdmin, getOrders);
// router
//     .route('/:id')
//     .get(currentUser, requireAuth, authorizeAdmin, getOneOrder)
//     .put(currentUser, requireAuth, authorizeAdmin, updateOrder)
//     .delete(currentUser, requireAuth, authorizeAdmin, deleteOneOrder);

// router
//     .route("/mine")
//     .get(currentUser, getOrderByUserId)
//     .delete(currentUser, requireAuth, authorizeAdmin, deleteOneOrder);

// router
//     .route("/placeOrder")
//     .post(currentUser, requireAuth, createOrder)

// router
//     .route("/:id/pay")
//     .put(currentUser, requireAuth, authorizeAdmin, updateOrder)
    
export {router as orderRouter};