import { useState } from 'react'
import './tickets.css'
import React from 'react'
import { useEffect} from 'react'
import axios from 'axios'
import moment from 'moment';
import { Link } from 'react-router-dom'
import Nav from '../controls/nav'
import SecondaryBtn from '../controls/secondarybtn'
import DangerBtn from '../controls/dangerbtn'


const Tickets = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const fetchAllTickets = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8800/tickets")
        setTickets(res.data);

      }catch (err) {
        console.log(err);
      }
    }
    fetchAllTickets()
  }, [])



  return (
    <>

        <Nav/>
        <table className="table-auto w-full	border-separate border-spacing-0">
        <thead className='bg-gray-300'>
            <tr>
            <th className='text-center p-4'>Ticket</th>
            <th className='text-center p-4'>Priority</th>
            <th className='text-left p-4'>Summary</th>
            <th className='text-center p-4'>Assigned</th>
            <th className='text-center p-4'>Created By</th>
            <th className='text-center p-4'>Date</th>
            <th className='text-center p-4'>Category</th>
            <th className='text-center p-4'>Status</th>
            <th className='text-center p-4'></th>
            <th className='text-center p-4'></th>
            </tr>
        </thead>
        <tbody>

          {tickets.map(ticket=>(      

            <tr key={ticket.ID} className='hover:bg-gray-200'>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.ID}</td>
            <td className='text-center align-middle border-b-2 border-gray-200'><div className='m-2 py-1 rounded-md' id="priority">{ticket.PriorityName}</div></td>
            <td className='pl-4 align-top py-7 border-b-2 border-gray-200'>{ticket.Title}</td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.FirstName + ' ' + ticket.LastName}</td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.CreatedBy}</td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{moment.utc(ticket.CreatedDate).format('MMMM DD, YYYY')}</td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.CategoryName}</td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{ticket.StatusName}</td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'><SecondaryBtn link={`/ticketdetails/${ticket.ID}`} text="View"></SecondaryBtn></td>
            <td className='text-center align-top py-7 border-b-2 border-gray-200'><DangerBtn text="Close"></DangerBtn></td>
            </tr>

          ))}
        </tbody>
        </table>

    </>
  )
}

export default Tickets
