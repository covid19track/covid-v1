let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.render('countries');
});

module.exports = router;
