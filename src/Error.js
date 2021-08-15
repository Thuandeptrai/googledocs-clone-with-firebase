import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="text-center w-screen h-screen">
           
           <button className="m-20  py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-red-500 focus:outline-none " > <Link to="/"  > Click here to go back</Link> </button>
        </div>
    )
}
