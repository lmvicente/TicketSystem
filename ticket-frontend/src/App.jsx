import { useState } from 'react'
import './App.css'
import Tickets from './pages/tickets'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewTicket from './pages/newticket'
import FourOhFour from './pages/404'
import TicketDetails from './pages/ticketdetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mx-auto py-16 px-10">
      <h1 className='py-6 text-5xl font-bold'><a href="/">Ticketing Dashboard</a></h1>
      <div className='drop-shadow-2xl bg-gray-100 p-10'>
        <BrowserRouter>
        <Routes>
        <Route path="/newticket" element={<NewTicket />}/>
        <Route path="/" element={<Tickets />}/>
        <Route path="/ticketdetails/:id" element={<TicketDetails />}/>
        <Route path="*" element={<FourOhFour />}/>
        </Routes>
        </BrowserRouter>
      </div>
      
    </div>

    </>
  )
}

export default App


