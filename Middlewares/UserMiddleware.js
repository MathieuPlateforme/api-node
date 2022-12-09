const bcrypt = require('bcrypt');

function hashPassword(req, res, next) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err)
    res.status(500).send({ error: 'Failed to hash password' });
    req.body.password = hash;
    next();
  });
}

function comparePassword(hashedPassword, req, res, next) {
  bcrypt.compare(req.body.password, hashedPassword, (err, match) => {
    if (err) {
      res.status(500).send({ error: 'Failed to compare password' });
    } else if (match) {
      next();
    } else {
      res.status(401).send({ error: 'Invalid password' });
    }
  });
}

module.exports = {
    hashPassword,
    comparePassword
}