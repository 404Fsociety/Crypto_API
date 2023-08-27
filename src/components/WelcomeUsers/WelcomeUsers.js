import React from 'react'
import './welcomeUsers.css'
import { Slide } from 'react-reveal';

const WelcomeUsers = () => {
  return (
    <div className='welcomeUsers'>
      <Slide left>
        <div className='welcomeUsers-text'>
            <h1>Tale of Money: Embracing the Future of Crypto</h1>
            <h3>Embark on a captivating journey, tracing the evolution of money and delving into the boundless possibilities of the crypto future. 
                Explore the transformative world of blockchain and decentralized finance</h3>
        </div>
        </Slide>
        <div className='welcomeUsers-image'>
          <Slide top>
        <img alt='img' src='https://framerusercontent.com/images/8JEuFyqtF5cWbOyv5ZvIhG9YrUY.png?scale-down-to=512'/>
        </Slide>
        <Slide right>
            <img alt='img' src='https://framerusercontent.com/images/ZLML83aBxOUaxq5Atr9HGbexU.png?scale-down-to=512'/>
            </Slide>
        </div>
    </div>
  )
}

export default WelcomeUsers