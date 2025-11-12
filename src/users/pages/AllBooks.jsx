import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const AllBooks = () => {

    const [status,setStatus]=useState(true)

    return (
        <div>
            <Header />

            <div className=' flex flex-col justify-center items-center'>
                <h1 className=' text-black text-2xl'>Collections</h1>
                <div className=' flex justify-center items-center py-5'>
                    <input placeholder=' Search Book Name' className=' bg-white placeholder-gray-600 p-2 border rounded me-1' type="text" />
                    <button className=' text-white bg-blue-600 p-2 rounded border border-blue-600'>Search</button>
                </div>


                <div className='md:grid grid-cols-[1fr_4fr] md:p-10 p-5'>

                    <div>
                        <div className='flex justify-center items-center'>
                            <h1 className=' text-xl'>Filter</h1>
                            <button onClick={()=>setStatus(!status)} className=' md:hidden' ><FontAwesomeIcon className=' text-3xl text-black ms-5' icon={faBars} /></button>
                        </div>

                        <div className={status?'md:block':'md:block justify-center items-center hidden'}>
                            <div className=' flex flex-col justify-center items-center'>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-6">

                            <div className="p-3 flex flex-col items-center text-center">
                                <img
                                    className="w-full max-w-xs rounded-md shadow-md"
                                    src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
                                    alt=""
                                />
                                <p className=' my-1'>Author</p>
                                <p className='my-1'>Title</p>
                                <button className=' my-1 border border-blue-900 bg-blue-900 w-full p-2 text-white hover:bg-white hover:text-blue-900'>View More</button>
                            </div>
                            <div className="p-3 flex flex-col items-center text-center">
                                <img
                                    className="w-full max-w-xs rounded-md shadow-md"
                                    src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
                                    alt=""
                                />
                                <p className=' my-1'>Author</p>
                                <p className='my-1'>Title</p>
                                <button className=' my-1 border border-blue-900 bg-blue-900 w-full p-2 text-white hover:bg-white hover:text-blue-900'>View More</button>
                            </div>
                            <div className="p-3 flex flex-col items-center text-center">
                                <img
                                    className="w-full max-w-xs rounded-md shadow-md"
                                    src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
                                    alt=""
                                />
                                <p className=' my-1'>Author</p>
                                <p className='my-1'>Title</p>
                                <button className=' my-1 border border-blue-900 bg-blue-900 w-full p-2 text-white hover:bg-white hover:text-blue-900'>View More</button>
                            </div>
                            <div className="p-3 flex flex-col items-center text-center">
                                <img
                                    className="w-full max-w-xs rounded-md shadow-md"
                                    src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
                                    alt=""
                                />
                                <p className=' my-1'>Author</p>
                                <p className='my-1'>Title</p>
                                <button className=' my-1 border border-blue-900 bg-blue-900 w-full p-2 text-white hover:bg-white hover:text-blue-900'>View More</button>
                            </div>
                        </div>

                    </div>


                </div>


            </div>

            <Footer />
        </div>
    )
}

export default AllBooks