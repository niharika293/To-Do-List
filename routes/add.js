const express = require('express');
const addController = require('../controllers/add_controller');
const router = express.Router();
console.log("Add Router loaded!");
router.post('/',addController.add);
module.exports = router;