
const express = require('express');
const router = express.Router();

const optionController = require('../../../controllers/api/v1/optionControllers');

router.post('/:id/options/create',optionController.createOption);


module.exports = router;