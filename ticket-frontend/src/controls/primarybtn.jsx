import { useState } from 'react'
import { Link } from "react-router-dom"


function PrimaryBtn({link, text}) {

  return (
    <>
    <Link to={link} className='bg-sky-500 hover:bg-sky-600 text-white basis-1/4 text-center p-3'>{text}</Link>
    </>

  )
}

export default PrimaryBtn
