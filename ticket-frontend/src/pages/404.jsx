import React from 'react'
import { Link } from 'react-router-dom'
const FourOhFour = () => {
    return (
        <>

        <div className='container mx-auto text-center content-center p-24'>
        <h2 className='text-8xl font-bold'>404</h2>
        <h2 className='text-4xl my-2'>Page Not Found</h2>
        <div className='mb-10'>Looks like the page you were looking for wasn't found.</div>

        <Link to="/" className='bg-sky-500 hover:bg-sky-600 p-3 px-6 text-white'>Go Back</Link>

        </div>
        </>
    )
}

export default FourOhFour;