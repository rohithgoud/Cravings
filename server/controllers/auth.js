const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const register = async (req,res)=>{
  try{

    const {email,password} = req.body;
 
    const user = await UserModel.findOne({email})
  
    if(user){
       return res.status(201).json({success:true,message:"user already exists"})
    }
  
    const hashedPassword = await bcrypt.hash(password,12)
  
  
    const newUser = new UserModel({email,password:hashedPassword})
  
    await newUser.save();
  
    return res.status(200).json({success:true,message:"user created successfully"})


  }catch(error){
    res.status(404).json({ success:false,message:"error in signup"})
  }

}


const login = async (req,res)=>{


  try{
    const {email,password} = req.body
    const loginUser = await UserModel.findOne({email})
    if(!loginUser){
      return res.status(404).json({success:false,message:"user doesnot exist"})
    }
  
    const isMatch = await bcrypt.compare(password, loginUser.password)
  
    if(!isMatch){
      return res.status(404).json({success:false,message:"wrong user credentials"})
    }
  

 const token = await JWT.sign({
  _id: loginUser._id
 }, process.env.JWT_SECRET, {expiresIn:"7d"} 
 )
 return res.status(200).json({success:true,message:"login successful"});

  }catch(error){
    res.status(500).json({success:false,message:"error in login"})
    
  }

}


const user = (req,res)=>{
res.send('protected')
}


module.exports = { register,login,user };