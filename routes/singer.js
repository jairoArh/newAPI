import express from 'express'

import {getAll,
  findById} from './../controllers/controller-singer.js'

const route = express.Router()

route.get('/',getAll)
route.get('/:id',findById)

export default route