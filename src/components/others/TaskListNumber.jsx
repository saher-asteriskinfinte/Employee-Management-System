import React from 'react'

const TaskListNumber = ({data}) => {
   return (
    <div className='flex p-8 pt-2 pb-4 gap-4 screen justify-between  text-white'>
      <div className='py-6 px-9 w-[45%] rounded-md md:bg-amber-500 bg-red-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
      <h3 className='text-xl '>New Task</h3>
    </div>
    <div className='py-6 px-9 w-[40%] rounded-md bg-emerald-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
      <h3 className='text-xl '>Completed Task</h3>
    </div>
    <div className='py-6 px-9 w-[45%] rounded-md bg-blue-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
      <h3 className='text-xl '>Active Task</h3>
    </div>
     <div className='py-6 px-9 w-[45%] rounded-md bg-pink-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
      <h3 className='text-xl '>Failed Task</h3>
    </div>
    </div>
  )
}

export default TaskListNumber