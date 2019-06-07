const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const postSchema = new Schema({
    author: {type: Schema.Types.ObjectId,ref:"user"},
    date: {type: Date},
    post: {type: String},
    view: {type: Number,default:0},
    title: {type: String, require: true},
    like: {type: Number,default: 0},
    image: {type: String, required: true}
},{
    timestamps: true,
}
);

module.exports = mongoose.model("post",postSchema)