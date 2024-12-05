import React from 'react';

const Auth = (props) => {
  return (
    <div><div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='shadow-md h- 957 bg-white p-10 w-full max-w-md rounded-2xl'>

        <div className='flex justify-center f'>
          <label className='mt-4 mb-4 font-xl text-light fond-bold'>
            {props.title}
          </label>

        </div>

         
          

          <div>
            {props.children}
          </div>
         </div>
      </div>
      </div>

      
  )
}

export default Auth 