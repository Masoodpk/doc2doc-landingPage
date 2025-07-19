import React from 'react'

function Form({ setPopUp }) {
  return (
    <div className="max-w-md w-full mx-auto bg-white  max-h-[832px]  h-full p-8 rounded-lg relative">
      {/* Close Button */}
      

      {/* Title */}
     

      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-[#D4D4D8] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border-[#D4D4D8]  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 border-[#D4D4D8] py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="+91 9876543210"
          />
        </div>

        {/* NEET Score */}
        <div className=''>
          <label className="block text-sm font-medium mb-1">Your NEET Score?</label>
          <input
            type="number"
            className="w-full px-4 border-[#D4D4D8] py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your score"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 pt-[20px]">
          <input type="checkbox" className=" border-[#D4D4D8] w-[20px] h-[20px] outline-none" />
          <label className="text-sm text-gray-600">
            Are you planning to prepare for the NEET exam?
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full mt-4 bg-yellow-400 text-gray-800 font-semibold py-3 rounded-full hover:bg-yellow-500 transition cursor-pointer"

          onClick={() => setPopUp(false)} // Close popup on submit
        >
          START APPLICATION
        </button>
      </form>
    </div>
  )
}

export default Form