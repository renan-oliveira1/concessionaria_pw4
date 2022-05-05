const express = require("express")

const route = express.Router()

const VehicleController = require("./controllers/VehicleController")

route.get("", VehicleController.findAll)

route.get("/:id", VehicleController.findOne)

route.post("", VehicleController.create)

route.delete("/:id", VehicleController.remove)

route.put("/:id", VehicleController.update)

module.exports = route