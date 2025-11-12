import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminSettings = () => {
  return (
    <>
    <AdminHeader/>

    <div className=' grid md:grid-cols-[1fr_4fr]'>

      <div>
        <AdminSidebar/>        
      </div>
      <div>
        <h1 className=' text-center text-3xl'>Settings</h1>
        <div className=' grid md:grid-cols-2'>

            <div className=' flex justify-center items-center px-10 py-5'>
               <p className=' text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel quam esse sequi odio ducimus consequuntur excepturi in. Beatae voluptatibus fugiat illo placeat atque in necessitatibus eaque aliquam molestiae ratione.
                    Incidunt reprehenderit quaerat ab quas sit aperiam eius quia, illo iste et optio ratione sunt? Est assumenda maxime perferendis aut! Optio, provident. Dolor sed rerum repellendus exercitationem. <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error libero asperiores ex atque ea inventore temporibus deserunt dignissimos nesciunt sed, dolorum at expedita repellat porro itaque, consectetur aperiam nostrum nam!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi neque culpa aliquam ab laudantium harum, dolor blanditiis, fugit mollitia nulla iste fuga quis voluptate aut? Adipisci ducimus facilis vero!
               </p>
            </div>
           <div className=' p-5'>
                <div className=' bg-blue-300 p-10 rounded'>
    
                    <div className=' flex flex-col'>
                        <div className=' md:px-10 lg:px-20 pb-5 flex items-baseline-last'>
                            <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="" />
                            <div className=' flex align-bottom'>
                                <input type="file" id='file' className=' hidden' />
                                <label htmlFor="file" className=' bg-yellow-500 p-1 lg:p-3 rounded text-white'><FontAwesomeIcon icon={faPencil} /></label>
                            </div>
                        </div>
                        <div className=' flex flex-col w-full gap-3'>
                            <input type="text" className=' bg-white rounded p-2' placeholder=' Username' />
                            <input type="text" className=' bg-white rounded p-2' placeholder=' Username' />
                            <input type="text" className=' bg-white rounded p-2' placeholder=' Username' />
                            <div className=' flex justify-evenly gap-3'>
                                <button className=' w-full p-2 bg-red-600 text-white rounded'>Reset</button>
                                <button className=' w-full p-2 bg-green-600 text-white rounded'>Update</button>
                            </div>
                        </div>
                    </div>
    
                </div>
           </div>

        </div>
      </div>

    </div>


    <Footer/>
    </>
  )
}

export default AdminSettings