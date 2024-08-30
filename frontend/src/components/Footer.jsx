import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:-2/3 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eaque eveniet dolor dignissimos fugiat soluta ex? Animi veniam rerum accusamus labore dicta, accusantium ducimus commodi, minima placeat consequatur similique excepturi.
            </p>
        </div>
        <div className='text-center'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className='text-center'>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>076-7270831</li>
                <li>hello@novelnest.com</li>
            </ul>
        </div>
      </div>
      <div >
        <hr />
        <p className='w-full py-2 text-sm text-center'>Copyright 2024 | All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
