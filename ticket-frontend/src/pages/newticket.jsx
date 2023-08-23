import React from 'react'
import {useState} from 'react'

const NewTicket = () => {

    const [ticket, setTicket] = useState({

    });

    return (
        <div>
            <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                Subject
            </span>
            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="Ticket subject" />
            </label>

            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Email
            </span>
            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>

            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Ticket Summary
            </span>
            <textarea className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder='Ticket body here ...'></textarea>
            </label>
            
            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Ticket Category
            </span>
            <select className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1'>
                <option selected disabled>Please select a category ...</option>    
                <option>sdf</option>
                <option>sdf</option>
                <option>sdf</option>
                <option>sdf</option>
            </select>
            </label>
            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Ticket Due Date
            </span>
            <input type="date" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1'></input>
            </label>
        </div>
    )
}

export default NewTicket;