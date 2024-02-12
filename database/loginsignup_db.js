const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/city-explorer')
.then(() => {
    console.log('monodb connected')
})
.catch(() => {
    console.log("mongodb failed to connect!")
})

const newSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        phone_no:{
            type:Number,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    }
)

const user_info = mongoose.model("user_info", newSchema)

module.exports = user_info