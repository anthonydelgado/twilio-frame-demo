const express = require('express');
const router = express.Router();
const TokenService = require('../services/tokenService');

/**
 * generate token.
 *
 * @param {string} req.body.device
 */
router.post('/', function(req, res) {
  const deviceId = req.body.device;
  const identity = req.body.identity;
  const token = TokenService.generate(identity, deviceId);

  res.json({
    identity: identity,
    token: token.toJwt(),
  });
});

module.exports = router;
