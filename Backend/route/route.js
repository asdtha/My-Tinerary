const Router = require("express").Router()

const citiesController = require("../controllers/citiesController")

const {getCities}= citiesController

Router.route("/cities")
.get(getCities)

module.exports = Router;