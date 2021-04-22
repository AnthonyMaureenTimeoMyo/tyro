const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../model/dbModel');
const saltRounds = 10;
const jwtSecret = 'tyrones-secret';
const authController = {};

authController.signup = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({
      log: 'Error in authController.signup',
      status: 401,
      message: 'Missing email or password in request body',
    });
  }

  bcrypt.hash(password, saltRounds).then((hash) => {
    const query = `
        INSERT INTO users(email, password)
        VALUES ($1, $2)
        RETURNING email, id`;

    db.query(query, [email, hash]).then((data) => {
      res.locals.user = data.rows[0];
      return next();
    });
  });
};

authController.login = (req, res, next) => {
  const { email, password } = req.body;

  const query = `
    SELECT email, password, id FROM users
    WHERE email = $1`;

  db.query(query, [email])
    .then((data) => {
      // Compare plaintext pass to hash from DB
      bcrypt.compare(password, data.rows[0].password).then((result) => {
        if (result) {
          const user = {
            username: data.rows[0].username,
            id: data.rows[0].id,
          };

          res.locals.user = user;
          return next();
        }

        return next({
          log: 'error authController.login',
          status: 401,
          message: 'invalid email/password combination',
        });
      });
    })
    .catch((error) => {
      return next(error);
    });
};

module.exports = authController;
