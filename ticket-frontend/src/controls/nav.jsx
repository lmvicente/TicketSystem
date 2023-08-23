import { useState } from 'react'
import './nav.css'
import { Link } from "react-router-dom"


function Nav() {

  return (

     
      <div className="flex flex-row space-x-4 mb-7">
      <input type="text" placeholder="Search tickets ..." className="p-2 block w-full bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        <button className="bg-slate-500 hover:bg-slate-700 basis-1/4 text-white">
            Search
        </button>
        <Link to="/newticket" className='bg-sky-500 hover:bg-sky-600 text-white basis-1/4 text-center p-2'>New Ticket</Link>


    </div>
  )
}

export default Nav
