import React from 'react'

const Filter = () => {
  return (
    <>  
        <div className='w-full flex justify-between'>
            <button type="button"
            className="text-blueCustom px-5 py-2 bg-white rounded-xl mb-2">
                Homepage
            </button>
            <form className="">
                <select className="bg-gray-200 text-gray-400 text-sm rounded-lg  block w-full p-2.5 outline-none selection:text-blueCustom">
                    <option defaultValue='choose a country'>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </form>
        </div>
         <hr className='w-full border-blueCustom ' />
    </>
    
  )
}

export default Filter
