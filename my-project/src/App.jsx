import { useState } from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import CreateNote from './Components/CreateNote'
import Note from './Components/Note'

function App() {
  const [addItem, setAddItem]= useState([]);
    function addNote(note){
       setAddItem((prevData)=>{
         return[...prevData,note];
       })
    }
    function onDelete(id){
      setAddItem((prevData)=>{
        return prevData.filter((item, index)=>{
          return index !== id;
        });
      });
    }
    
  return (
    <div className='min-h-screen bg-yellow-50 '>
       <div> <Header /></div>
       <div className='mt-5 flex justify-center p-4 md:p-0'>
        <CreateNote passNote={addNote}/>
        </div>
        <div className='mt-5 p-5 flex md:flex-row flex-wrap gap-10 justify-center md:justify-start'>
         {
           addItem.map((val,index)=>{
              return(
                <Note 
               key={index}
               id={index}
               title={val.title}
               content={val.content}
               deltetItem={onDelete}
            />
              )
           })
         }
         </div>
        <div> <Footer /></div>
    </div>
  )
}

export default App
