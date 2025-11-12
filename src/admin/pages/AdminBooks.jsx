import { faHouse, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'

export const AdminBooks = () => {

  const [bookListSatus, setbookListStatus] = useState(true)
  const [usersStatus, setUsersStatus] = useState(false)




  return (
    <>
      <AdminHeader />

      <div className=' grid md:grid-cols-[1fr_4fr]'>

        <div>
          <AdminSidebar />
        </div>
        <div>
          {/* tabs */}
          <div className=' flex justify-center items-center my-5 gap-0'>

            <p onClick={() => { setbookListStatus(true); setUsersStatus(false) }} className={bookListSatus ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : ' p-4 text-black border-b border-gray-200'}> Book List</p>
            <p onClick={() => { setbookListStatus(false); setUsersStatus(true);}} className={usersStatus ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : ' p-4 text-black border-b border-gray-200'}>Users</p>
      

          </div>



          {/* content */}
          {
            bookListSatus &&
            <div>
              <h1 className=' text-2xl text-center'>Book List</h1>
              <div className=' p-3 px-10 sm:px-24 md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3'>
                  
                <div className=' p-3 border border-gray-300'>
                    <div className=' flex flex-col'>
                      <img className=' h-80' src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                      <h1 className=' mt-2 text-xl text-blue-400'>Author name</h1>
                      <h1 className=' mt-2 text-lg'>Book Name</h1>
                      <h1 className=' mt-2 text-amber-600'>$ Price</h1>
                      <div className=' mt-3'>
                        <button className=' w-full bg-green-600 text-white p-2'>Approve</button>
                      </div>
                    </div>
                </div>
                <div className=' p-3 border border-gray-300'>
                    <div className=' flex flex-col'>
                      <img className=' h-80' src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                      <h1 className=' mt-2 text-xl text-blue-400'>Author name</h1>
                      <h1 className=' mt-2 text-lg'>Book Name</h1>
                      <h1 className=' mt-2 text-amber-600'>$ Price</h1>
                      <div className=' mt-3'>
                        <button className=' w-full bg-green-600 text-white p-2'>Approve</button>
                      </div>
                    </div>
                </div>
                <div className=' p-3 border border-gray-300'>
                    <div className=' flex flex-col'>
                      <img className=' h-80' src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                      <h1 className=' mt-2 text-xl text-blue-400'>Author name</h1>
                      <h1 className=' mt-2 text-lg'>Book Name</h1>
                      <h1 className=' mt-2 text-amber-600'>$ Price</h1>
                      <div className=' mt-3'>
                        <button className=' w-full bg-green-600 text-white p-2'>Approve</button>
                      </div>
                    </div>
                </div>
                <div className=' p-3 border border-gray-300'>
                    <div className=' flex flex-col'>
                      <img className=' h-80' src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                      <h1 className=' mt-2 text-xl text-blue-400'>Author name</h1>
                      <h1 className=' mt-2 text-lg'>Book Name</h1>
                      <h1 className=' mt-2 text-amber-600'>$ Price</h1>
                      <div className=' mt-3'>
                        <button className=' w-full bg-green-600 text-white p-2'>Approve</button>
                      </div>
                    </div>
                </div>
                <div className=' p-3 border border-gray-300'>
                    <div className=' flex flex-col'>
                      <img className=' h-80' src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                      <h1 className=' mt-2 text-xl text-blue-400'>Author name</h1>
                      <h1 className=' mt-2 text-lg'>Book Name</h1>
                      <h1 className=' mt-2 text-amber-600'>$ Price</h1>
                      <div className=' mt-3'>
                        <button className=' w-full bg-green-600 text-white p-2'>Approve</button>
                      </div>
                    </div>
                </div>
                <div className=' p-3 border border-gray-300'>
                    <div className=' flex flex-col'>
                      <img className=' h-80' src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                      <h1 className=' mt-2 text-xl text-blue-400'>Author name</h1>
                      <h1 className=' mt-2 text-lg'>Book Name</h1>
                      <h1 className=' mt-2 text-amber-600'>$ Price</h1>
                      <div className=' mt-3'>
                        <button className=' w-full bg-green-600 text-white p-2'>Approve</button>
                      </div>
                    </div>
                </div>
  
              </div>
            </div>
          }
          {
            usersStatus &&
            <div>
              <h1 className=' text-2xl text-center'>Users</h1>

              <div className=' grid md:grid-cols-2 lg:grid-cols-3'>

                <div className=' p-5'>
                    <div className=' bg-gray-300 p-5'>
                        <h4 className=' text-red-500'>ID : 8748748348844</h4>
                        <div className=' flex gap-3 my-3'>
                          <img className=' w-20 rounded-4xl' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" />
                          <div>
                            <h1 className=' text-2xl text-blue-400'>Ram</h1>
                            <p>ram@gmail.com</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className=' bg-gray-300 p-5'>
                        <h4 className=' text-red-500'>ID : 8748748348844</h4>
                        <div className=' flex gap-3 my-3'>
                          <img className=' w-20 rounded-4xl' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" />
                          <div>
                            <h1 className=' text-2xl text-blue-400'>Ram</h1>
                            <p>ram@gmail.com</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className=' bg-gray-300 p-5'>
                        <h4 className=' text-red-500'>ID : 8748748348844</h4>
                        <div className=' flex gap-3 my-3'>
                          <img className=' w-20 rounded-4xl' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" />
                          <div>
                            <h1 className=' text-2xl text-blue-400'>Ram</h1>
                            <p>ram@gmail.com</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className=' bg-gray-300 p-5'>
                        <h4 className=' text-red-500'>ID : 8748748348844</h4>
                        <div className=' flex gap-3 my-3'>
                          <img className=' w-20 rounded-4xl' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" />
                          <div>
                            <h1 className=' text-2xl text-blue-400'>Ram</h1>
                            <p>ram@gmail.com</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className=' bg-gray-300 p-5'>
                        <h4 className=' text-red-500'>ID : 8748748348844</h4>
                        <div className=' flex gap-3 my-3'>
                          <img className=' w-20 rounded-4xl' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" />
                          <div>
                            <h1 className=' text-2xl text-blue-400'>Ram</h1>
                            <p>ram@gmail.com</p>
                          </div>
                        </div>
                    </div>
                </div>

              </div>

            </div>
          }

        </div>

      </div>


      <Footer />
    </>
  )
}
