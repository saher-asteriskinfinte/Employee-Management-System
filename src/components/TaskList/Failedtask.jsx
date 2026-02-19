import React from 'react'

const Failedtask = ({data}) => {
  return (
    <div><div className='h-[95%] w-60 rounded-xl bg-blue-400 p-4 shrink-0'>
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 text-[0.75rem] py-1 rounded-md'>{data.category}</h3>
        <h4 className='text-[1rem]'>{data.taskDate}</h4>
    </div>
    <h2 className='font-semibold mt-2 '>{data.taskTitle}</h2>
    <p className='text-[0.70rem] overflow-hidden'>{data.taskDescription}
    </p>
    <div className="mt-4">
    <button className='bg-red-500 py-1 rounded-md px-2 text-[0.65rem] nowrap'>Failed</button>
    </div>
    </div></div>
  )
}

export default Failedtask