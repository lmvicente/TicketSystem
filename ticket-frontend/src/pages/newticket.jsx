import React from 'react'
import {useState} from 'react'
import PrimaryBtn from '../controls/primarybtn';
import SecondaryBtn from '../controls/secondarybtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewTicket = () => {

    const [ticket, setTicket] = useState({
        Title: "",
        Description: "",
        CreatedBy: "",
        AssignedTo: 0,
        CreatedDate: Date.now(),
        DueDate: "",
        Status: 1,
        Priority: 1,
        Category: ""
    
    });

    const handleChange= (e) => {
        setTicket(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const navigate = useNavigate();

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8800/newtickets",ticket);
            alert("test")
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                Subject
            </span>
            <input type="text" name="Title" onChange={handleChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="Ticket subject" />
            </label>

            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Email
            </span>
            <input type="email" name="CreatedBy" onChange={handleChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>

            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Ticket Summary
            </span>
            <textarea name="Description" onChange={handleChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder='Ticket body here ...'></textarea>
            </label>
            
            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Ticket Category
            </span>
            <select name="category" onChange={handleChange} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1'>
                <option defaultValue disabled >Please select a category ...</option>    
                <option value="1">General</option>
                <option value="2">Incident Report</option>
                <option value="3">System Maintenance</option>
                <option value="4">Other</option> 
            </select>
            </label>
            <label className="block mt-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium">
                Ticket Due Date
            </span>
            <input type="date" name="DueDate" onChange={handleChange} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1'></input>
            </label>

            <div className='block mt-7 space-x-4'>
            <button className='bg-sky-500 hover:bg-sky-600 text-white basis-1/4 text-center p-3' onClick={handleClick}>Submit</button>
            {/* <PrimaryBtn text='Submit' ></PrimaryBtn> */}
            <SecondaryBtn link='/' text='Cancel' ></SecondaryBtn>
            </div>
        </div>
    )
}

export default NewTicket;