import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faCircleCheck, faL, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditProfile from '../components/EditProfile'

const Profile = () => {


  const [sellBookSatus, setSellBookStatus] = useState(true)
  const [userBookStatus, setUserBookStatus] = useState(false)
  const [purchaseBook, setPurchaseBook] = useState(false)



  return (
    <div>
      <Header />

      <div style={{ height: "200px" }} className=' bg-gray-900'></div>
      <div style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-150px" }}>
        <img style={{ height: "200px", width: "200px", borderRadius: "50%" }} src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>

      <div className=' flex p-5 md:px-20 mt-2 items-center justify-between'>

        <div className=' flex flex-wrap justify-center items-center'>
          <p className=' ms-5 text-3xl'>Abhiram</p>
          <FontAwesomeIcon icon={faCircleCheck} className=' text-blue-600 ms-2' />
        </div>

        <EditProfile />
      </div>

      <p className=' px-5 md:px-20 py-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, officia officiis. Delectus itaque aperiam voluptatum eius repudiandae autem, molestias odio ut similique repellat nam eum officia saepe consequuntur fugit quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi veniam minima distinctio. Fuga quasi voluptatibus veritatis officia asperiores officiis reiciendis corporis eligendi similique explicabo corrupti ab, dolor eos ullam.</p>

      {/* tabs */}
      <div className=' flex justify-center items-center my-5 gap-0'>

        <p onClick={() => { setSellBookStatus(true); setUserBookStatus(false); setPurchaseBook(false) }} className={sellBookSatus ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : userBookStatus ? 'p-4 text-black border-b border-gray-200' : ' p-4 text-black border-b border-gray-200'}>Sell Books</p>
        <p onClick={() => { setSellBookStatus(false); setUserBookStatus(true); setPurchaseBook(false) }} className={userBookStatus ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : sellBookSatus ? 'p-4 text-black border-b border-gray-200' : ' p-4 text-black border-b border-gray-200'}>My Books Status</p>
        <p onClick={() => { setSellBookStatus(false); setUserBookStatus(false); setPurchaseBook(true) }} className={purchaseBook ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : sellBookSatus ? 'p-4 text-black border-b border-gray-200' : ' p-4 text-black border-b border-gray-200'}>Purchase Books</p>

      </div>



      {/* content */}
      {
        sellBookSatus &&
        <div className=' bg-gray-200 p-5 md:p-10 md:m-20 m-10'>

          <h1 className=' text-center text-3xl font-medium'>Book Details</h1>
          <div className=' md:grid md:grid-cols-2 mt-5 w-full'>
            <div className=' md:px-3'>
              <div className=' mb-3'>
                <input placeholder='title' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='Author' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='No of Pages' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='Image URL' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='Price' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <textarea placeholder='Abstractt' className=' h-60 p-2 bg-white rounded placeholder-gray-500 w-full' name="" id=""></textarea>
              </div>

            </div>
            <div className=' md:px-3'>
              <div className=' mb-3'>
                <input placeholder='Publisher' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='Language' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='ISBN' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3'>
                <input placeholder='Category' type="text" className=' p-2 bg-white rounded placeholder-gray-500 w-full' />
              </div>
              <div className=' mb-3 flex justify-center-safe items-center w-full'>
                <label htmlFor="imagefile">
                  <input type="file" name="" id="imagefile" style={{ display: "none" }} />
                  <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Image-Upload-Icon-Graphics-10388650-1-1-580x386.jpg" alt="" style={{ height: "200px" }} />
                </label>

              </div>

              <div className=' flex justify-center items-center gap-3'>
                <img src="https://marketplace.canva.com/EAFbWl4xunQ/2/0/1024w/canva-neutral-minimalist-aesthetic-finance-basics-for-women-guide-ebook-cover-NLo1dMhwsSw.jpg" alt="" style={{ width: "70px" }} />
                <FontAwesomeIcon icon={faSquarePlus} className=' text-5xl' />
              </div>
            </div>

          </div>
          <div className=' flex justify-end'>
            <div className=' flex justify-center items-center gap-3 mt-5'>
              <button className=' border p-2 text-white bg-red-600 rounded hover:border hover:bg-white hover:border-red-600 hover:text-red-600'>Reset</button>
              <button className='p-2 border text-white bg-green-600 rounded hover:border hover:bg-white hover:border-green-600 hover:text-green-600'>Submit</button>
            </div>
          </div>

        </div>
      }
      {
        userBookStatus &&
        <div className=' p-10 my-20 shadow rounded'>
          <div className=' bg-gray-200 p-4 rounded'>
            <div className=' md:grid grid-cols-[3fr_1fr]'>
              <div>
                <h1 className=' text-4xl font-bold'>Title</h1>
                <h2 className='text-2xl font-semibold'>Author</h2>
                <h3 className=' text-xl'>$ Price</h3>
                <p>Abstract : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, modi. Quisquam, magni voluptates reprehenderit voluptatibus blanditiis tempore modi cumque quod minima quas omnis consectetur debitis dolore laudantium vitae quos neque.</p>

                <div className=' flex'>
                  <img src="https://psdstamps.com/wp-content/uploads/2022/04/pending-stamp-png.png" style={{width:"120px"}} alt="Pending..." />
                  <img src="https://www.citypng.com/public/uploads/preview/hd-green-round-approved-stamp-png-7017516946281143xalzzggez.png?v=2025090208" style={{width:"100px"}} alt="Pending..." />
                  <img src="https://png.pngtree.com/png-vector/20230607/ourmid/pngtree-rejected-stamp-with-red-color-vector-png-image_7121303.png" style={{width:"100px"}} alt="Pending..." />
                </div>
              </div>
              <div>
                <div className=' flex justify-end'>
                  <img style={{ height: "300px" }} src="https://static-cse.canva.com/blob/2200116/1024w-bVa1FCunN4Y.jpg" alt="" />

                </div>                <div className=' flex justify-end mt-4'>
                  <button className=' p-3 bg-red-600 text-white rounded'>Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className=' flex  flex-col justify-center items-center'>
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="" />
            <h1 className=' font-bold text-red-600 text-4xl'>No Books Found !</h1>
          </div>

        </div>
      }
      {
        purchaseBook &&
        <div className=' p-10 my-20 shadow rounded'>
          <div className=' bg-gray-200 p-4 rounded'>
            <div className=' md:grid grid-cols-[3fr_1fr]'>
              <div>
                <h1 className=' text-4xl font-bold'>Title</h1>
                <h2 className='text-2xl font-semibold'>Author</h2>
                <h3 className=' text-xl'>$ Price</h3>
                <p>Abstract : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, modi. Quisquam, magni voluptates reprehenderit voluptatibus blanditiis tempore modi cumque quod minima quas omnis consectetur debitis dolore laudantium vitae quos neque.</p>

                <div className=' flex'>
                  <img src="https://psdstamps.com/wp-content/uploads/2022/04/pending-stamp-png.png" style={{width:"120px"}} alt="Pending..." />
                  <img src="https://www.citypng.com/public/uploads/preview/hd-green-round-approved-stamp-png-7017516946281143xalzzggez.png?v=2025090208" style={{width:"100px"}} alt="Pending..." />
                  <img src="https://png.pngtree.com/png-vector/20230607/ourmid/pngtree-rejected-stamp-with-red-color-vector-png-image_7121303.png" style={{width:"100px"}} alt="Pending..." />
                </div>
              </div>
              <div>
                <div className=' flex justify-end'>
                  <img style={{ height: "300px" }} src="https://static-cse.canva.com/blob/2200116/1024w-bVa1FCunN4Y.jpg" alt="" />

                </div>                <div className=' flex justify-end mt-4'>
                  <button className=' p-3 bg-red-600 text-white rounded'>Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className=' flex  flex-col justify-center items-center'>
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="" />
            <h1 className=' font-bold text-red-600 text-4xl'>No Books Found !</h1>
          </div>

        </div>
      }


      <Footer />
    </div>
  )
}

export default Profile