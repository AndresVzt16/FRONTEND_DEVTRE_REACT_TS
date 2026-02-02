import React from 'react'

const Card = ({children}:{children:React.ReactNode}) => {

  return (
    <>
    <main className='border px-6 py-3 border-gray-100 shadow bg-white rounded-2xl'>{children}</main>
    </>
  )
}

export default Card