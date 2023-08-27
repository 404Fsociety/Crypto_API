import React from 'react'
import './welcome.css'
import { Slide } from 'react-reveal'

const Welcome = () => {
  return (
    <div className='welcome'>
        <div style={{display:"flex",justifyContent:"space-between",padding:"0 10%"}}>
        <Slide left>
        <img className='bitcoin' src='https://framerusercontent.com/images/JnSyz6Jf7cJY47fWKd8GCuKzVNo.svg' alt='img'style={{boxShadow:"0 0 85px -2px #f7931a",borderRadius:"100px",marginTop:"10%"}} />
        </Slide>
        <Slide top>
        <img className='lithium' src='https://framerusercontent.com/images/NLyTguerUqdP3Z4g6TcQ1CaE0Q.svg' alt='img' style={{boxShadow:"0 0 85px -2px #4d6de9",borderRadius:"100px",marginBottom:"10%"}} />
        </Slide>
        </div>
        <Slide top>
        <h1>Trusted Secure <span style={{color:"rgb(90, 223, 137)"}}>Web3</span> Crypto Exchange</h1>
        <h3>Experience peace of mind with our trusted and secure Web3 crypto exchange. 
            Safeguard your assets and embrace seamless transactions in the decentralized world. 
            Join us for a worry-free trading </h3>
        </Slide>
        <div>
        <div style={{display:"flex",justifyContent:"space-between",padding:"0 25%"}}>
        <Slide bottom>
        <img className='usdt' src='https://framerusercontent.com/images/OWE3KUiNpD5DAEHXUFwOriCLn34.svg' alt='img'style={{boxShadow:"0 0 85px -2px #26a17b",borderRadius:"100px",marginBottom:"8%"}} />
        </Slide>
        <Slide right>
        <img className='dogecoin' src='https://framerusercontent.com/images/roC9sYi7vJhC63dKbsMJeYT5tlU.svg' alt='img' style={{boxShadow:"0 0 85px -2px #f3ba2f",borderRadius:"100px",marginTop:"8%"}}/>
        </Slide>
        </div>
        </div>
    </div>
  )
}

export default Welcome