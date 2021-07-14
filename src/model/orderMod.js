const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({

        name:{
            type:String
        },
        size:{
            type:Number
        },
        price:{
          type:Number
        }
})

const Order = new mongoose.model("order",orderSchema)

module.exports = Order