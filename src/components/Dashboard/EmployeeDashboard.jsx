import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import TaskListNumber from '../others/TaskListNumber'
import { Authcontext } from '../../context/Authprovider'


const EmployeeDashboard = (props) => {
  const [userData] = useContext(Authcontext);
  
  return (
    <div className='bg-[#1c1c1c] h-screen w-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard