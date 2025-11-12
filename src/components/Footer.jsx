import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full  bg-black text-white pb-10 md:pb-5'>
      <div className=' grid grid-cols-1 md:grid-cols-4 p-8 gap-8 text-wrap'>
        <div>
          <h1 className=' font-bold text-2xl pb-4'>About Us</h1>
          <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores aliquid ex laboriosam vero ullam ratione reiciendis esse ipsa vitae magni quas pariatur mollitia, et, velit impedit. Praesentium, iste quae?</p>
        </div>
        <div>
          <h1 className=' font-bold text-2xl pb-4'>Contact</h1>
          <p className=' text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam repudiandae animi accusantium omnis vero repellendus eos rerum illum inventore facere possimus adipisci dolorem qui error soluta, iste autem. Exercitationem, fugiat.</p>
        </div>
        <div>
          <h1 className=' font-bold text-2xl pb-4'>More</h1>
          <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, recusandae? Odit architecto explicabo ad eum quia obcaecati rerum, sequi, praesentium itaque placeat cum qui temporibus voluptatem fugit totam nostrum adipisci?</p>
        </div>
      </div>
      <p className=' py-10 text-center'>All rights researved @BookStore Library</p>
    </div>
  )
}

export default Footer