const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  res.render('info');
});

module.exports = router;
