import expressValidator from 'express-validator';

const { body } = expressValidator;
export const productValidation = [
  body('name')
    .isLength({ min: 2, max: 20 })
    .withMessage('Name must be between 2 and 20 characters.'),
  body('price').isNumeric().withMessage('Please enter a valid price.'),
  body('image').isLength({ min: 1 }).withMessage('Please choose 1 - 4 images.'),
  body('countInStock')
    .isNumeric()
    .withMessage('Please enter a valid quantity of product.'),
//   body('category')
//     .isEmpty()
//     .withMessage('Category should be indoor or outdoor.'),
  //   body('description').isEmpty().withMessage('Please enter the description'),
];
