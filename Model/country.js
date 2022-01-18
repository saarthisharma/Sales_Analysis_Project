const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    }
});
const Country = new mongoose.model('Country' , countrySchema);
module.exports = Country;