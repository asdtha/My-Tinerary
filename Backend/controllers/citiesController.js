const Cities = require("../models/cities.js")

const citiesController = {
    getDatos: async(req, res)=> {
        console.log(req)
        console.log(response)
        let cities;
        let error = null;
        try{
            cities = await Cities.find()
        }catch(err){
            error = err
            console.error(error)
        }
        res.json({
            response:error?"ERROR":{cities},
            success:error?false:true,
            error:error
         }) 
    }
}

module.exports = citiesController;