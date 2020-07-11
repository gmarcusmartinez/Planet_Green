export const errorHandler = (err, req, res, next) => {
  res.status(400).send({ errors: [err.message] });
};
