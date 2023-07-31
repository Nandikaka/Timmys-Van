import React from 'react'

export default function NavBar() {
  let is
  return (
    <div>
      <header>
        <nav className='flex items-center justify-between px-8 mt-16'>
          <h1 className='text-4xl font-bold'>T'sV</h1>

          <div className="">
            <a href="#howItWorks" className='text-lg p-2 mx-2 rounded-3xl bg-white text-black'>How it works</a>
            <a href="#pricing" className='text-lg p-2 mx-2 rounded-3xl bg-white text-black'>Pricing</a>
          </div>

          <a href="#contact" className='hidden lg:inline-block'>Contact</a>

        </nav>
      </header>
    </div>
  )
}
