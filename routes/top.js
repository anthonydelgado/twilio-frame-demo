const express = require('express');
const router = express.Router();

/**
 * top page.
 */
router.get('/', function(req, res) {
  res.render('top');
});

module.exports = router;
