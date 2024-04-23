import React from 'react'
const year = new Date().getFullYear();
function Footer() {
  return (
    <footer className='p-4 bg-yellow-200 fixed bottom-0 w-full'>
        <p className='text-center text-xl'>copyright © {year}</p>
    </footer>
  )
}

export default Footer