import React from 'react'

const Header = (props) => {
  console.log(props.changeUser);
  function logOutUser(){
    localStorage.setItem("loggedInUser","");
    props.changeUser(null);
    // window.location.reload();
  }
   return (
    <div className='flex items-center justify-between p-8 pt-4 pb-4 text-white'>
        <h1 className='text-2xl'>Hello, <br/><span className='text-3xl font-semibold'>{props.data?.name || "User"}</span>👋🏻</h1>
        <button onClick={logOutUser} className='bg-red-600 py-2 px-5 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header