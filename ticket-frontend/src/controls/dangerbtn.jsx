import { useState } from 'react'
import { Link } from "react-router-dom"


function DangerBtn({link, text}) {

  return (
    <>
    <Link to={link} className='bg-red-500 hover:bg-red-600 text-white basis-1/4 text-center p-3'>{text}</Link>
    </>

  )
}

export default DangerBtn
