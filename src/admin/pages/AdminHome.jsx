import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const AdminHome = () => {
  return (
    <>
      <AdminHeader />

      <div className=' md:grid md:grid-cols-[1fr_4fr]'>

        <div>
          <AdminSidebar />
        </div>
        <div className=' p-10'>
          <div className=' grid md:grid-cols-1 lg:grid-cols-3'>

            <div className=' md:px-10 px-5'>
              <div className=' bg-blue-800 p-4 flex gap-2 items-center justify-center rounded text-white'>
                <FontAwesomeIcon icon={faBook} className=' text-2xl' />
                <div>
                  <h1 className=' text-lg'>Total Number Of Books</h1>
                  <h1 className=' text-3xl text-center'>100+</h1>
                </div>
              </div>
            </div>
            <div className=' md:px-10 px-5'>
              <div className=' bg-green-800 p-4 flex gap-2 items-center justify-center rounded text-white'>
                <FontAwesomeIcon icon={faUsers} className=' text-2xl' />
                <div>
                  <h1 className=' text-lg '>Total Number Of Users</h1>
                  <h1 className=' text-3xl text-center'>100+</h1>
                </div>
              </div>
            </div>
            <div className=' md:px-10 px-5'>
              <div className=' bg-yellow-600 p-4 flex items-center justify-center rounded text-white'>
                <FontAwesomeIcon icon={faBook} className=' text-2xl' />
                <div>
                  <h1 className=' text-lg'>Total Number Of Employees</h1>
                  <h1 className=' text-3xl text-center'>100+</h1>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


      <Footer />
    </>
  )
}

export default AdminHome