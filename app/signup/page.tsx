import React from 'react'
import '@/app/globals.css'
import { ModeToggle } from '../components/toggle-theme-change'

const page = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold underline text-black'>Hello world!</h1>
      


      <ModeToggle />
    </div>
  )
}

export default page
