let collection = require('../models/car');

const postCar = (req,res) => {
    let car = req.body;
    collection.postCar(car, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllCars = (req,res) => {
    collection.getAllCars((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteCar = (req,res) => {
    let car = req.body;
    collection.deleteOne(car, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postCar,getAllCars}