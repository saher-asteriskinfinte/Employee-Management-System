import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import Alltasks from '../others/Alltasks'


const AdminDashboard = (props) => {
   return (
    <div className='bg-[#1c1c1c] h-auto w-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Createtask/>
        <Alltasks/>
    </div>
  )
}

export default AdminDashboard