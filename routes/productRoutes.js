const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product.controller');

router.post('/', productCtrl.create);
router.get('/', productCtrl.findAll);
router.get('/category/:category', productCtrl.findByCategory);

module.exports = router;