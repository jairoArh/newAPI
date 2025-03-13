import Singer from "../models/Singer.js"

async function getAll(req,res){
  try{
    const data = await Singer.find({})
    
    return res.status(200).json({'state':"OK",'data':data})
  }catch(err){
    return res.status(200).json({})
  }
}

async function findById(req,res){
  const {id} = req.params
  return res.status(200).json({'state':"OK",data:id})
}

export{
  getAll,
  findById
}
