import React from 'react'
import bannerbg from '../assets/images/bannerbg.png'

const BannerBlog = () => {
  return (
  <section className='bg-[url("assets/images/bannerbg.png")] bg-cover bg-center bg-no-repeat py-1 lg:h-[350px] ' >
    <div className="container">
        <div>
            <h1 className='lg:text-[43px] text-2xl pt-5 font-inter lg:pt-17 italic text-font-color text-center ' >TRUEST REVIEW FOR BETTER EXPERIENCE</h1>

            <button type="button" class="text-white block mt-4 lg:mt-12 mx-auto leading-6 lg:tracking-[4px] bg-navbar font-bold font-inria rounded-md lg:text-2xl px-5 py-2  lg:px-12 lg:py-3 ">Blog</button>
        </div>
    </div>
  </section>
  )
}

export default BannerBlog