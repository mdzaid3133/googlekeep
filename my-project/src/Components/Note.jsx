import React, { useState } from 'react'

function Note({title,content,id,deltetItem}) {
    function RemoveEvent(e){
       deltetItem(id);
    }
  return (
    <div className='bg-yellow-300 w-[300px] p-3 rounded-md min-h-[150px]'>
       <h2 className='text-xl font-semibold'>{title} </h2>
       <h2 className='text-xl font-semibold mt-4'>{content}</h2>
       <button 
        onClick={RemoveEvent}
       className='text-xl font-semibold bg-red-600 p-2 rounded-md text-white mt-5'>Remove</button>
    </div>
  )
}

export default Note