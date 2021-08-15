import React, { useState } from 'react'
import {  useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function HomePage() {
    const [header,setHeader] = useState('')
    const isInvalid = header === ''
    const history = useHistory()
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        history.push(`./p/${header}`)
    }
    return (
        <div className="h-screen bg-gray-100 h-screen flex justify-center">
    <div className="py-6 px-8 h-50 mt-20 bg-white rounded shadow-xl">
        <h1  className="font-bold text-center mb-2 text-xl" > Auto-Saving Text </h1>
      <form action="">
        <div className="mb-6  w-80">
          <label htmlFor="name" className="block text-gray-800  font-bold">Name:</label>
          <input type="text" name="name" id="name"  onChange={(e)=> {setHeader(e.target.value)}} placeholder="" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

      
        <button className={`cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded ${isInvalid && 'opacity-50'}`} onClick={handleSubmit} disabled={isInvalid} >Go</button>
      </form>
    </div>
  </div>
    )
}
