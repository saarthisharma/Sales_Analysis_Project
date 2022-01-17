const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: {
        type:Number,
        required:true,
        unique:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    orderPriority:{
        type:String
    },
    shipDate:{
        type:Date,
    },
    unitsPrice:{
        type:Number,
    },
    unitSold:{
        type:Number,
    },
    unitCost:{
        type:Number

    },
    totalRevenue:{
        type:Number
    },
    totalCost:{
        type:Number
    },
    totalProfit:{
        type:Number
    },
    regionId:{
        type:String,
        required:true
    },
})
const Order = new mongoose.model('Order' , orderSchema);
module.exports = Order;