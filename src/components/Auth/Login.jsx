import React, { useState } from 'react'

const Login = ({handleLogin}) => {
const [email, setemail] = useState("");
const [password, setpassword] = useState("")

const SubmitHandler=(e)=>{
e.preventDefault();
console.log(email,password);
handleLogin(email,password);
setemail("");
setpassword("");
}
   return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#111]'>
    <div className='border-2 p-16 pb-24 pt-20 rounded-xl border-emerald-600'>
    <form onSubmit={(e)=>{SubmitHandler(e);}} className='flex flex-col items-center justify-cente text-white'>
     <input value={email} onChange={(e)=>{setemail(e.target.value)}}  type="email" className='outline-none required bg-transparent border-2 border-emerald-600 rounded-full placeholder:text-gray-300 py-3 px-5' placeholder='Enter your email' />
     <input value={password} onChange={(e)=>{setpassword(e.target.value)}
     }  type="password" className='outline-none required bg-transparent border-2 border-emerald-600 rounded-full placeholder:text-gray-300 py-3 px-5 mt-2' placeholder='Enter password' />   
     <button className='mt-2 border-none bg-emerald-600 text-white py-2 px-22 text-[1rem] rounded-full'>Log in</button>
    </form>
    </div>
    </div>
  )
}

export default Login