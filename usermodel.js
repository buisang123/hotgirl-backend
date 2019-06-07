const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
    username: {type: String, required:true, unique:true},
    password: {type: String, require:true},
    avatar: {type: String},
    name: {type: String}
},{
    timestamps:true
}
);



module.exports = mongoose.model("user",userSchema)