const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/register', (req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body
    EmployeeModel.findOne({email: email, password: password})
    .then(user => {
        if(user) {
            res.json("Success")
        } else {
            res.json("No record existed")
        }
    })
    .catch(err => res.json(err))
})

const port = 3001
app.listen(port, ()=>{
    console.log('je marche sur ce port '+port)
})