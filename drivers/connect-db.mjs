import mongoose from "mongoose";

const URL = process.env.URL_DB
const DB = process.env.DB

try{
  await mongoose.connect(URL + DB)
  console.log('mongoose Connect Success....')
}catch(error){
  console.log(error)
}

export default mongoose