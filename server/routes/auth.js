 const express = require('express')
 const router = express.Router();
 const {register,login,user} = require('../controllers/auth')
 const requireSignIn = require('../middleware/authController')

 router.post('/signup',register);
 router.post('/login',login)
 router.get('/user', requireSignIn ,user)

 module.exports = router; 