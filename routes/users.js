const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/tested")
  .then(() => console.log("Connected!"));


const Schema = mongoose.Schema;
const myModelSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  info: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type:String, 
    required : true
  },
  phone:{
    type: Number,
    required : true,
  }
});

const MyModel = mongoose.model("MyModel", myModelSchema);
module.exports = MyModel;
