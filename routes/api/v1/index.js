const express = require('express');
const router = express.Router();

router.use('/questions', require('./question'));
router.use('/options', require('./option'));


module.exports = router;
