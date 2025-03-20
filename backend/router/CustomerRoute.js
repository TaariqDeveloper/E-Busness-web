const express = require("express")
const CustomerController = require("../controller/CustomerController")

const Router = express.Router()

Router.post("/create/customer", CustomerController.CreateCustomer)
Router.post("/read/customer" , CustomerController.CustomerLogin)

module.exports = Router