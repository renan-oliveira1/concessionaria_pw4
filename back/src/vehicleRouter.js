const express = require("express")

const route = express.Router()

const VehicleController = require("./controllers/VehicleController")

route.get("", VehicleController.findAll)

route.get("/notselled", VehicleController.findAllNotSelled)

route.get("/:id", VehicleController.findOne)

route.get("/selled/:id", VehicleController.findAllBySellerId)

route.post("", VehicleController.create)

route.delete("/:id", VehicleController.remove)

route.put("/:id", VehicleController.update)

module.exports = route