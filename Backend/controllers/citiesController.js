const Cities = require("../model/cities")

const citiesController = {
    getCities: async(req, res )=> {
        let cities;
        let error = null;
        try{
            cities = await Cities.find()
        }catch(err){
            error = err
            console.error(error)
        }
        res.json(...cities) 
    }
}

module.exports = citiesController;