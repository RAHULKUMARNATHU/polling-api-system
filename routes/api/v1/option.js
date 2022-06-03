
const express = require('express');
const router = express.Router();

const optionController = require('../../../controllers/api/v1/optionControllers');

router.post('/:id/options/create',optionController.createOption);
router.delete('/:id/delete', optionController.optionDelete);
router.get('/:id/add_vote', optionController.addVote);


module.exports = router;