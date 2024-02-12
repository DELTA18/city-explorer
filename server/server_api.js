const express = require('express')
const user_info = require('../database/loginsignup_db')
const cors = require('cors')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
app.use(express.urlencoded( { extended: true}))
app.use(cors())


const salt  = 10;
app.post('/', async (req, res)=>{ 

    // const ipAddress = req.ip || req.connection.remoteAddress;
    // console.log(ipAddress)
    const{name,password} = req.body;
    try {
        console.log(password)
        const check = await user_info.findOne({username: name})
        console.log(check)
        bcrypt.compare(password.toString(), check.password, (compareErr, result) => {
            if (compareErr) {
                // res.json("login", { err: "An error occurred during password comparison." });
                console.log(compareErr)
                // return;
            }

        if(check.username == name)
        {

            if(!result)
            {
                res.json('password_not_match')
            }
        else{
            res.json('exists');
            console.log('password matched!')
        }
    }
    })   
    } catch (e) {
        res.json('notexists')
    }
})

app.post('/signup', async (req, res)=>{
    const{email,phone,name,password} = req.body;
    bcrypt.hash(password.toString(), salt, async (err, hash) => {
        console.log(hash)
        if(err)
        {
            console.log(err)
        }

        const user = {
            email:email,
            phone_no:phone,
            username:name,
            password: hash
        }
        console.log(user)
        
        try {
            console.log('check---------->')
            const check = await user_info.findOne({username:username})
            console.log(check.username)
            console.log(req.body.username)
            if(check.username == req.body.username)
            {
                res.json('exists')
            }
            
        } catch (e) {
            let password = req.body.password
            res.json('notexists')
            if(password.length >= 5)
            {
                await user_info.insertMany([user])
                console.log('userinfo inserted!');
            }
            
            
        }
    });
})

app.all('', (req, res) => {
    res.end('<h1>This is Server port</h1>')
})

app.listen(8000, () => {
    console.log('port connected on http://localhost:8000')
})