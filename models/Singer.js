import mongoose from "mongoose";

const {Schema} = mongoose

const SingerSchema = new Schema({
  id :{
    type : Number,
    required: [true, 'id required'],
    unique: true
  },
  name :{
    type:String,
    required: [true, 'name required']
  },
  country:{
    type:String,
    required: [true, 'country required']
  }
})

export default mongoose.model('singer', SingerSchema )