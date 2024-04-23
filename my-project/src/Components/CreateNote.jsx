import React, { useState } from 'react'

function CreateNote(props) {
   const [expand, setExpand] = useState(false)
   const [note, setNote] = useState({
    title:"",
    content:""
   });

   function inputEvent(e){
        const {value, name} = e.target;
         setNote((preData)=>{
           return{
            ...preData,
            [name]:value,
           }          
         });
   }  

    function addEvent(){
        props.passNote(note);
        setNote({
          title:"",
          content:"",
        })
    }
    function expandIt(){
      setExpand(true)
    }
  return (
    <div className='bg-yellow-300 flex flex-col w-[400px] p-4 rounded-md '>
         {expand?
        <input type='text'
         name='title'
         value={note.title}
         onChange={inputEvent}
         placeholder='Add Task' className='text-xl p-3 bg-transparent border-2 border-white mt-2 rounded-md'
         /> : null}
        <textarea 
         name='content'
         value={note.content}
         onChange={inputEvent}
         onClick={expandIt}
         cols="" rows="" placeholder='Write here...' className='text-xl p-3 bg-transparent border-2 border-white mt-2 rounded-md'></textarea>
        {expand?
        <button 
         onClick={addEvent}
        className='text-xl bg-green-700 p-3 rounded-md mt-2 text-white border-2 border-white'>Add</button> : null}
    </div>
  )
}

export default CreateNote