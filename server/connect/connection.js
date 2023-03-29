const mongoose = require('mongoose')
const key = process.env.MONGODB



mongoose.connect(key,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected');
}).catch((err)=> console.log('Not Connected'))



