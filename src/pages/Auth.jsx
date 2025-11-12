import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ({register}) => {
  return (
    <div id='loginpage'>

      <div className=' md:grid md:grid-cols-3'>
        <div></div>
        <div >
          <h1 className=' mt-10 text-4xl text-white text-center'>BOOKSTORE</h1>
          <div id='cardlogin' className=' shadow-black shadow-2xl flex justify-center items-center flex-col rounded-lg px-10 py-10 my-5'>
            <div style={{ width: "70px", height: "70px", borderRadius: "70px" }} className=' flex justify-center items-center border bg-black'>
              <FontAwesomeIcon icon={faUser} className=' text-white text-3xl' />
            </div>
  
            {!register?<h1 className=' text-white mt-6 text-3xl'>LOGIN</h1>
            :
            <h1 className=' text-white mt-6 text-3xl'>REGISTER</h1>}

            { register&&<div className=' mt-3 mb-4 w-full'>
              <input type="text" placeholder='User Name' className=' p-2 rounded placeholder-gray-600 bg-white w-full' />
            </div>}
  
            <div className=' mt-3 mb-4 w-full'>
              <input type="text" placeholder=' Email Id' className=' p-2 rounded placeholder-gray-600 bg-white w-full' />
            </div>
  
            <div className=' mt-3 mb-4 w-full'>
              <input type="password" placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
            </div>
  
  
            <div className=' mb-5 w-full flex justify-between'>
  
              <p className=' text-amber-400'>Never share your password with others</p>
  
              {!register&&<p className=' text-white'>Forgot Password</p>}
  
            </div>
  
            {!register?<div className=' mb-5 w-full'>
                <button className=' bg-green-600 w-full text-white rounded p-2 text-xl'>Login</button>
            </div>
            :
            <div className=' mb-5 w-full'>
                <button className=' bg-green-600 w-full text-white rounded p-2 text-xl'>Register</button>
            </div>}
  
            <p className=' mb-5 text-white'> OR </p>
  
            {!register&&<div className=' mb-5 w-full'>
                <button className=' bg-white text-black w-full rounded p-2 text-xl'>Sign In With Google</button>
            </div>}
  
            {!register?<p className=' text-center text-white'>Are you a new User? <Link to={'/register'}>Register</Link></p>
            :
            <p className=' text-center text-white'>Are you an existing User? <Link to={'/login'}>Login</Link></p>}
  
          </div>
        </div>
        <div></div>

      </div>

    </div>
  )
}

export default Auth