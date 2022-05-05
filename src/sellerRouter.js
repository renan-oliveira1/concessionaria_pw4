const express = require("express")

const route = express.Router()

const SellerController = require("./controllers/SellerController")

route.get("", SellerController.findAll)

route.get("/:id", SellerController.findOne)

route.post("", SellerController.create)

route.delete("/:id", SellerController.remove)

route.put("/:id", SellerController.update)

module.exports = route