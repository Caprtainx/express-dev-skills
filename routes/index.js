var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show)


module.exports = router;
