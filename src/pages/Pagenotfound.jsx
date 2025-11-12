import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <>
    <div className=' w-screen flex flex-col items-center justify-center '>
      <img className=' w-3xl p-10' src="https://cdn.svgator.com/images/2024/04/book-with-broken-pages-animation-404-error.gif" alt="" />
      <h1 className=' text-2xl text-center text-red-600 mb-3'>Sorry , Cant find the page...</h1>
      <h1 className=' text-4xl text-center text-red-700'>OOPs! I think you are Lost...</h1>
      <Link to={'/'}><button className=' m-4 border-2 border-black w-fit p-2 rounded-md bg-blue-800 text-white'>Back to Home</button></Link>
    </div>
    
    </>
  )
}

export default Pagenotfound