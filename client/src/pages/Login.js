import React , { useState }from 'react'
import Navbar from '../components/Navbar'
import toast,{ Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate =  useNavigate()
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const handleChange =async (e) =>{
  e.preventDefault();
  try{
    const res =  await axios.post('http://localhost:4000/auth/login', {email, password})
    
    if(res.data.success){
     toast.success(res.data.message)
     navigate('/')
    }else{
     toast.error(res.data.message)
    }
 
     }catch(err){
     console.log(err)
     toast.error("something went wrong")
     }
 
    
  

}

  


  return (
    <div>
       <Toaster />
        <Navbar/>
      <div className='flex flex-col justify-center items-center mt-10 pb-28 px-1'>
      <h1 className="lg:text-5xl md:text-5xl font-bold md:mb-6 text-4xl  py-2">Login into account</h1>


     <form className="lg:w-[35%] md:w-1/2 rounded-lg px-8  py-10 flex flex-col  w-full lg:mt-6 mt-6 md:mt-0" autoComplete='off' onSubmit={handleChange}>
     <div className="mb-6">
     
        <input type="email"  name="email" placeholder='Enter email' className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3  transition-colors duration-200 ease-in-out" onChange={(e)=> setEmail(e.target.value)} value={email} required />
      </div>
      <div className="mb-6">
       
        <input type="password" name="password" placeholder='Password' className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3  transition-colors duration-200 ease-in-out" onChange={(e)=> setPassword(e.target.value)} value={password} required />
      </div>
      <button type='submit' className="text-white bg-black  border-0 py-2 px-8 focus:outline-none rounded text-lg">Login</button>
      
     </form>
    
  </div>
 
    </div>
  )
}

export default Login
