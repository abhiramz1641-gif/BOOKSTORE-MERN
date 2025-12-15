import React from 'react'
import Header from './Header'

const PAymentError = () => {
    return (
        <div>
            <Header/>
            <div style={{height:"90vh"}} className=' flex justify-center items-center'>

                <div className=' flex flex-col items-center justify-center'>
                    <h1 className=' text-5xl'>Payment Error</h1>

                    <img src="https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif" alt="" />
                </div>

            </div>
        </div>
    )
}

export default PAymentError