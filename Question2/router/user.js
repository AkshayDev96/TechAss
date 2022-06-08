const express = require('express')
const route = express.Router()
const user = require('../controllers/user')

route.get('/getAll',user.get)
route.put('/update',user.update)
route.delete('/update',user.delete)
route.post('/add',user.add)


module.exports = route