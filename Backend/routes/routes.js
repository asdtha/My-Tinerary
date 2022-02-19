const Router = require("express").Router();
const citiesController = require("../controllers/citiesController")
const {getDatos} = citiesController

Router.route("/datos")
.get(getDatos)

module.exports = Router;