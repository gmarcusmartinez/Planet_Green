import expressValidator from 'express-validator';

const { body } = expressValidator;
export const signupValidation = [
  body('name')
    .isLength({ min: 2, max: 20 })
    .withMessage('Name must be between 2 and 20 characters.'),
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('Password must be at least between 5.'),
];

export const siginValidation = [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password').trim().notEmpty().withMessage('Please enter a password.'),
];
