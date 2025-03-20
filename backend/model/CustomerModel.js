const mongoose = require("mongoose")
const CustomerSchema = mongoose.Schema({
        fullName: {
                type: String,
                require: true
        },
          address: {
                type: String,
                require: true
        },
            number: {
                type: Number,
                require: true
        },
           email: {
                type: String,
                require: true
        },
         password: {
                type: String,
                require: true
         }
}, { timestamps: true })


module.exports = mongoose.model("customer" , CustomerSchema)

