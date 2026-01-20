import Menu from "./Menu"
const Header = () => {
  return (
    <nav className=' bg-gray-950  w-full flex py-2 px-10  bg- border-solid border-gray-200  justify-between items-center'>
      <section className='flex items-center gap-2 py-2'>
        <img src="/logo.svg" className='w-18 ' alt="logo Devtree" />
        <p className='text-4xl text-lime-50 font-medium '>Dev<span className='font-bold text-blue-500'>Tree</span></p>
      </section>
      <section>
        <Menu/>
      </section>
    </nav>
  )
}

export default Header