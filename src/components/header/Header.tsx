import React from 'react'

const Header = () => {
  return (
    <nav className=' bg-gray-950  border-b w-full flex py-2 px-10  bg- border-solid border-gray-200 '>
      <section className='flex items-center gap-2'>
        <img src="/logo.svg" className='w-20 ' alt="logo Devtree" />
        <p className='text-4xl text-lime-50 font-medium '>Dev<span className='font-bold text-blue-500'>Tree</span></p>
      </section>
    </nav>
  )
}

export default Header