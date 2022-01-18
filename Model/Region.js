const mongoose = require("mongoose");
const ObjectId = Schema.Types.ObjectId;
const regionSchema = new mongoose.Schema({
    regionId : {
        type : ObjectId,
        required : true
    },
    regionName :{
        type : String,
        required:true
    }
});
const Region = new mongoose.model('Region' , regionSchema);
module.exports = Region;

