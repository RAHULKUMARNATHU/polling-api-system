const express = require('express');
const router = express.Router();

const questionController = require('../../../controllers/api/v1/questionControllers');

router.post('/create', questionController.createQuestion);

module.exports = router;