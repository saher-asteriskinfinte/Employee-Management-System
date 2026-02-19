import React from 'react'
import Accepttask from '../TaskList/Accepttask'
import Newtask from '../TaskList/Newtask'
import Completetask from '../TaskList/Completetask'
import Failedtask from '../TaskList/Failedtask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className=' flex overflow-x-auto gap-6 text-white flex-nowrap items-center h-[50%] w-[94%] ml-8'>
    {data.tasks.map((elem,idx)=>{
    if(elem.active){
     return <Accepttask data={elem} key={idx}/>
    }
    if(elem.newTask){
     return <Newtask data={elem} key={idx}/>
    }
    if(elem.failed){
    return  <Failedtask data={elem} key={idx}/>
    }
    if(elem.completed){
    return  <Completetask data={elem} key={idx}/>
    }
    })}
    </div>
  )
}

export default TaskList