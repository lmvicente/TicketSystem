import { useState } from 'react'
import { Link } from "react-router-dom"

function SecondaryBtn({link, text}) {

  return (
      <>
      <Link to={link} className='bg-slate-500 hover:bg-slate-700 basis-1/4 text-white p-3'>{text}</Link>
      </>
  )
}

export default SecondaryBtn
