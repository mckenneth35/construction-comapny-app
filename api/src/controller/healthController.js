const express = require('express');

const healthController = express();

healthController.all(
  '/',
  (req, res) => {
    res.json({ result: 'ok' });
  },
);

module.exports = { healthController };
