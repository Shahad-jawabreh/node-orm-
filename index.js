const express = require('express'); 
const app = express(); 
const {connection} = require('./DB/connection.js')
const Userrouter = require('./src/modules/users/user.js')

connection()
app.use(express.json())
app.use('/users',Userrouter)
app.listen(4000,()=>{
    console.log('listening on 4000');
})