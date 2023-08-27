import React from 'react'
import "./exchange.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Flip } from 'react-reveal'

const ExchangeCard = () => {
  return (
    <div className='exchange'>
      <Flip left>
        <div className='exchange-card1'>
            <h1>Exchange Plus!</h1>
            <p>Explore stop orders, deep liquidity, and more!</p>
            <ArrowForwardIcon style={{fontSize:"55px",color:'#262632'}}/>
        </div>
        <div className='exchange-card2'>
            <div className='exchange-card2-1'>
              <div className='exchange-card2-1A' >
                <div className='number'>01</div>
                <div className='card-text'>
                  <h1>Card-to-crypto purchases.</h1>
                  <p>Own crypto in minutes using your card</p>
                </div>
              </div>
              <div className='exchange-card2-1A' >
                <div className='number'>02</div>
                <div className='card-text'>
                <h1>Margin leveraging.</h1>
                  <p>Maximize gains with margin trading with coiner</p>
                </div>
              </div>
            </div>
            <div style={{height:"50px"}}></div>
            <div className='exchange-card2-1'>
              <div className='exchange-card2-1A' >
                <div className='number'>03</div>
                <div className='card-text'>
                <h1>Explore Promotions </h1>
                  <p>Giveaways, competitions, and more!</p>
                </div>
              </div>
              <div className='exchange-card2-1A' >
                <div className='number'>04</div>
                <div className='card-text'>
                <h1>Maximize Savings</h1>
                  <p>Save more money, worry less with coiner</p>
                </div>
              </div>
            </div>
        </div>
        </Flip>
    </div>
  )
}

export default ExchangeCard