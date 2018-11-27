var express = require('express');
var router = express.Router();
const Story = require('../models/story.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([new Story({test: 'Same text', source: 'Test'})]);
});

module.exports = router;