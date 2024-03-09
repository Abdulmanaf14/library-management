const express = require('express');
const router = express.Router();
const CirculationController = require('../controllers/circulationController')

router.post('/checkouts',CirculationController.checkoutBook);
router.post('/return',CirculationController.returnbook);
router.post('/fine',CirculationController.calculatedue);

module.exports = router;