const mongoose = require("mongoose");
const ObjectId = Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema({
    orderId: {
        type:Number,
        required:true,
        unique:true
    },
    itemid :{
        type:ObjectId,
        ref :'Item'
    },
    regionId:{
        type:ObjectId,
        ref :'Region',
        required:true
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
    }
});
const Order = new mongoose.model('Order' , orderSchema);
module.exports = Order;