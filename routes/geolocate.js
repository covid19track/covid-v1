let express = require('express');
let router = express.Router();
let ipInfo = require('ipinfo');

router.get('/', (req, res, next) => {
  let ip_address = req.headers['x-forwarded-for'];

  if (ip_address) {
    let list = ip_address.split(',');
    ip_address = list[list.length-1];
  } else {
    ip_address = req.connection.remoteAddress;
  }

  ipInfo(ip_address, (err, data) => {
    if (err) {
      res.status(503);
      console.log("ipInfo Error:", err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
