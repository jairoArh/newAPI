async function getAll(req,res){
  return res.status(200).json({'state':"OK",'data':[]})
}

async function findById(req,res){
  const {id} = req.params
  return res.status(200).json({'state':"OK",data:id})
}

export{
  getAll,
  findById
}
