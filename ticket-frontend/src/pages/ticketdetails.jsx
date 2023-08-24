import React from 'react'
import {useState} from 'react'
import PrimaryBtn from '../controls/primarybtn';
import SecondaryBtn from '../controls/secondarybtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useEffect} from 'react'

const TicketDetails = () => {

        const [tickets, setTickets] = useState([])
      
        function GetTicket() {
            var url = window.location.href;
            var match = (url.match(/.*(?:\D|^)(\d+)/));
            if (match[1]) {
                var userID = match[1];
            }
            return userID;
        }

        useEffect(() => {
          const fetchAllTickets = async () => {
            try {
              const res = await axios.get("http://127.0.0.1:8800/ticketdetails/" + GetTicket())
              setTickets(res.data);
      
            }catch (err) {
              console.log(err);
            }
          }
          fetchAllTickets()
        }, [])


    function GetTicket() {
        // var url = 'http://nikerunning.nike.com/nikeplus/v2/services/app/run_list.jsp?userID=1413795052&startIndex=0&endIndex=-1&filterBy=all';
        var url = window.location.href;
        var match = (url.match(/.*(?:\D|^)(\d+)/));
        if (match[1]) {
            var userID = match[1];
        }
        return userID;
    }


    return (
        <>
            {tickets.map(ticket=>(      
                <>
                <h2 className='text-4xl font-semibold mb-5' key={ticket.ID}>Ticket #{ticket.ID}</h2>
                <label className="block">
                <span className=" after:ml-0.5 after:text-red-500 block font-medium">
                    Subject
                </span>
                <input type="text" disabled name="Title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400" placeholder="Ticket subject" readOnly value={ticket.Title} />
            </label>
            <label className="block mt-5">
                <span className=" after:ml-0.5 after:text-red-500 block  font-medium">
                    Created By
                </span>
                <input type="email" disabled name="CreatedBy" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400" placeholder="you@example.com" readOnly value={ticket.CreatedBy} />
            </label>
            <label className="block mt-5">
                <span className="after:ml-0.5 after:text-red-500 block  font-medium">
                    Ticket Summary
                </span>
                <textarea name="Description" disabled className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400" placeholder='Ticket body here ...' readOnly value={ticket.Description}></textarea>
            </label>
            <label className="block mt-5">
                <span className=" after:ml-0.5 after:text-red-500 block  font-medium">
                    Ticket Category
                </span>
                <select name="Category" disabled className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400' readOnly value={ticket.Category}>
                    <option defaultValue disabled>Please select a category ...</option>
                    <option value="1">General</option>
                    <option value="2">Incident Report</option>
                    <option value="3">System Maintenance</option>
                    <option value="4">Other</option>
                </select>
            </label>
            <label className="block mt-5">
                <span className="after:ml-0.5 after:text-red-500 block  font-medium">
                    Ticket Due Date
                </span>
                <input type="date" name="DueDate" disabled className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400' readOnly value={moment.utc(ticket.DueDate).format('yyyy-MM-DD')}></input>
            </label>

            <label className="block mt-5">
                <span className=" after:ml-0.5 after:text-red-500 block  font-medium">
                    Ticket Priority
                </span>
                <select name="Priority" disabled className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400' readOnly value={ticket.Priority}>
                    <option defaultValue disabled>Please select a category ...</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    <option value="4">Critical</option>
                </select>
            </label>

            <label className="block mt-5">
                <span className="after:ml-0.5 after:text-red-500 block  font-medium">
                    Ticket Created
                </span>
                <input type="date" name="CreatedDate" disabled className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400' readOnly value={moment.utc(ticket.CreatedDate).format('yyyy-MM-DD')}></input>
            </label>

            <label className="block mt-5">
                <span className=" after:ml-0.5 after:text-red-500 block  font-medium">
                    Tech Assigned
                </span>
                <select name="AssignedTo" disabled className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400' readOnly value={ticket.AssignedTo}>
                    <option defaultValue disabled>Please select a category ...</option>
                    <option value="0">Tech Not Assigned</option>
                    <option value="1">Leah Vicente</option>
                </select>
            </label>

            <label className="block mt-5">
                <span className=" after:ml-0.5 after:text-red-500 block  font-medium">
                    Ticket Status
                </span>
                <select name="Status" disabled className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 disabled:border-slate-200 disabled:text-slate-400' readOnly value={ticket.Status}>
                    <option defaultValue disabled>Please select a category ...</option>
                    <option value="1">Open</option>
                    <option value="2">Closed</option>
                    <option value="3">Waiting</option>
                </select>
            </label>
            
            <div className='block mt-7 space-x-4'>
                <SecondaryBtn link='/' text='Cancel'></SecondaryBtn>
                <button className='bg-yellow-300 hover:bg-yellow-400 text-black basis-1/4 text-center p-3 px-6'>Edit</button>
                <button className='bg-sky-500 hover:bg-sky-600 text-white basis-1/4 text-center p-3'>Submit</button>
            </div>
                </>

        


                    // <tr key={ticket.ID} className='stretched-link'>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.ID}</td>
                    // <td className='text-center align-middle border-b-2 border-gray-200'><div className='m-2 py-1 rounded-md' id="priority">{ticket.PriorityName}</div></td>
                    // <td className='pl-4 align-top py-7 border-b-2 border-gray-200'>{ticket.Title}</td>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.FirstName + ' ' + ticket.LastName}</td>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.CreatedBy}</td>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'>{moment.utc(ticket.CreatedDate).format('MMMM DD, YYYY')}</td>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.CategoryName}</td>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.StatusName}</td>
                    // <td className='text-center align-top py-7 border-b-2 border-gray-200'><SecondaryBtn link={`/ticketdetails/${ticket.ID}`} text="test"></SecondaryBtn></td>
                    // </tr>

                    
        ))}
        </>
    )
}

export default TicketDetails;