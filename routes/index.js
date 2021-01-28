const express = require('express');
const homeController  = require('../controllers/home_controller');
const router = express.Router(); //this will be able to handle all the URLs.
console.log("Router loaded!!");
router.get('/',homeController.home);
router.use('/add',require('./add'));
router.use('/delete',require('./delete'));

module.exports = router;