const mongoose = require("mongoose");
const ObjectId = Schema.Types.ObjectId;
const itemSchema = new mongoose.schema({
    itemId : {
        type : ObjectId
    },
    itemName :{
        type : String
    }
});
const Item = new mongoose.model('Item' , itemSchema);
module.exports = Item;