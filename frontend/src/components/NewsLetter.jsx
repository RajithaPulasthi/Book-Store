import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = () => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam reiciendis quia, asperiores obcaecati excepturi libero veniam possimus sed reprehenderit ipsa saepe at cum provident vitae labore, nesciunt nostrum doloribus.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full max-w-md mx-auto my-6 flex items-center border rounded-md overflow-hidden">
        <input className="flex-grow px-4 py-2 outline-none" type="email" placeholder="Enter your email" />
        <button type="submit" className="bg-black text-white text-sm px-6 py-2 whitespace-nowrap hover:bg-gray-800 transition-colors">
        SUBSCRIBE
        </button>
</form>
    </div>
  )
}

export default NewsLetter
