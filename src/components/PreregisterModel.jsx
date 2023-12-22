import React, { useState } from 'react'

const PreregisterModel = ({setIsOpen}) => {
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(`Email: ${email} Password: ${number}`)
    }
  return (
    <div className="fixed z-10 inset-0 mt-20 overflow-y-auto">
          <div className="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-400 opacity-75"></div>
            </div>
            <div
              className="inline-block f align-bottom bg-[#cca06d] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium "
                      id="modal-headline"
                    >
                      Enter Details
                    </h3>
                    <form 
                    onSubmit={handleSubmit}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 mb-2 lowercase block w-full pl-2 py-2 px-32 sm:text-sm  text-gray-900 border-gray-300 rounded-md"
                      />
                      <input
                        type="number"
                        name="number"
                        placeholder="Number (Optional)"
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-2 mb-2 block w-full pl-2 py-2 sm:text-sm text-gray-900 border-gray-300 rounded-md"
                      />
                      <button type="submit" className="mt-3 mr-5 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#f3cda2] p-2  text-base font-medium hover:bg-[#cca06d] focus:outline-none  sm:mt-0 sm:w-auto sm:text-sm">
                        Submit
                      </button>
                      <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#f3cda2] p-2  text-base font-medium hover:bg-[#cca06d] focus:outline-none  sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PreregisterModel