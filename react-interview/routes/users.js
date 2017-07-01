var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  console.log("Portpt");
  res.send('respond with a resource');

  // And insert something like this instead:
  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);
  // console.log("We are in users URI.");
});

module.exports = router;