import React from 'react'
import './how.css'
import { Fade,Flip } from 'react-reveal'

const How = () => {
  return (
    <div className='how'>
        <Fade bottom>
        <h1>How It Works</h1>
        <h3>Discover how Coiner website simplifies crypto trading through user-friendly interfaces, 
            secure transactions, and real-time market insights.</h3>
        </Fade>
        <div className='Card'>
            <div className='card-img'>
                <img alt='img' src='https://framerusercontent.com/images/7JFi5vS3N0YhD6wPNoN1e53ZvZg.png'/>
            </div>
            <Flip top>
            <div className='cards'>
                <div className='cards-content1'>
                    <img alt='img' src='https://framerusercontent.com/images/Stscs9t5uKA7zDjYR7OmUZvJ5aw.svg'/>
                    <h1>Create Wallet</h1>
                    <p>Create your secure digital wallet, safeguarding your cryptocurrencies</p>
                </div>
                <div className='cards-content2'>
                    <img alt='img' src='https://framerusercontent.com/images/AznvkIe2Q43pi9RhQpcRsrdTWjk.svg'/>
                    <h1>Create Account</h1>
                    <p>Unlock possibilities, create an account to access trading platform</p>
                </div>
                <div className='cards-content3'>
                    <img alt='img' src='https://framerusercontent.com/images/BcF21lguLQdkkC8tODe80eog58.svg'/>
                    <h1>Register</h1>
                    <p>Register to explore a world of crypto opportunity with platform</p>
                </div>
                <div className='cards-content4'>
                    <img alt='img' src='https://framerusercontent.com/images/VQvK9xkczl83ySNyUKczIseFHo.svg'/>
                    <h1>Start Trading</h1>
                    <p>Begin your crypto journey today by starting trading on our platform.</p>
                </div>
            </div>
            </Flip>
        </div>
    </div>
  )
}

export default How