const express = require('express');
const router = new express.Router();
const ipInfo = require('ipinfo');

router.get('/', (req, res, next) => {
  let ipAddress = req.headers['x-forwarded-for'];

  if (ipAddress) {
    const list = ipAddress.split(',');
    ipAddress = list[list.length-1];
  } else {
    ipAddress = req.connection.remoteAddress;
  }

  ipInfo(ipAddress, (err, data) => {
    if (err) {
      res.status(503);
      console.log('ipInfo Error:', err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
