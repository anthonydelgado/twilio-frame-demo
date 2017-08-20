const express = require('express');
const router = express.Router();

/* GET token. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
