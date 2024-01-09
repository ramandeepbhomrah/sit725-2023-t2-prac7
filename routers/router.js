let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postCar(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllCars(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllCars(req,res);
});


module.exports = router;