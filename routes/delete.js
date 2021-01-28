const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/delete_controller');
console.log("Delete router loaded!");
router.post('/',deleteController.delete);
module.exports = router;