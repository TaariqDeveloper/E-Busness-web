const CustomerModel = require("../model/CustomerModel")

// create post

const CreateCustomer = async (req, res) => {
        try {
                const newCustomer = CustomerModel(req.body)
                const saveCustomer = await newCustomer.save()
                if (saveCustomer) {
                res.send(saveCustomer)
                }
        } catch (error) {
                console.log(error)
        }
}

// create customer Login

const CustomerLogin = async (req, res) => {
        try {
                if (req.body.email || req.body.password) {
                        const customerLogin = await CustomerModel.findOne(req.body)
                        if (customerLogin) {
                                res.send(customerLogin)
                        }
                        else {
                                res.send({error: "user Not Found"})
                        }
                }
                else {
                        res.send({
                                error: "incorrect email or password"
                        })
                }
        } catch (error) {
                console.log(error)
        }
}




module.exports = {CreateCustomer ,CustomerLogin}