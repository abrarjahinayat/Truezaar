import React from 'react'
import bannerbg from '../assets/images/bannerbg.png'

const Banner = () => {
  return (
  <section className='bg-[url("assets/images/bannerbg.png")] bg-cover bg-center bg-no-repeat h-[350px] ' >
    <div className="container">
        <div>
            <h1 className='text-[43px] font-inter pt-17 italic text-font-color text-center ' >TRUEST REVIEW FOR BETTER EXPERIENCE</h1>

            <button type="button" class="text-white block mt-12 mx-auto leading-6 tracking-[2px] bg-navbar font-bold font-inter rounded-md text-md px-9 py-3 ">Write a review</button>
        </div>
    </div>
  </section>
  )
}

export default Banner