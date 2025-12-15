import React from 'react'
import Header from './Header'

const PaymentSuccess = () => {
    return (
        <div>
            <Header/>
            <div style={{height:"90vh"}} className=' flex justify-center items-center'>

                <div className=' flex flex-col items-center justify-center'>
                    <h1 className=' text-5xl'>Payment Success</h1>

                    <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="" />
                </div>

            </div>
        </div>
    )
}

export default PaymentSuccess