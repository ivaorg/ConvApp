// routes/index.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Inch to Centimeter Converter", result: null });
});

/* POST convert endpoint. */
router.post('/convert', function(req, res, next) {
  // Extract inches value from the form submission
  var inches = parseFloat(req.body.inches);

  // Perform conversion to centimeters
  var cm = inches * 2.54;

  // Render the index view again, passing the result
  res.render('index', { 
    title: 'Inch to Centimeter Converter', 
    result: `${inches} in = ${cm.toFixed(2)} cm.` 
  });
});

module.exports = router;
