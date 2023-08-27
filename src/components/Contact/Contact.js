import React from 'react'
import './contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-text'>
            <h1>Get in touch here</h1>
            <p>For any inquiries or collaboration opportunities, 
                feel free to get in touch with us through our contact page in Crypto-Tunisia Website.</p>
        </div>
        <div className='contact-button'>
            <div className='contact-button1'>
                <MailOutlineIcon style={{color:"rgb(90, 223, 137)",fontSize:"35px",marginRight:"1rem"}}/>
                <h1>crypto-tunisia@gmail.com</h1>
            </div>
            <div className='contact-button2'>
                <LocalPhoneIcon style={{color:"rgb(90, 223, 137)",fontSize:"35px",marginRight:"1rem"}}/>
                <h1>+216 99 44 20 60</h1>
            </div>
        </div>
        <div className='under-contact'>
        <div className='under-contact-text'>
                <h1>About Us</h1>
                <p>At Crypto, we're pioneering the decentralized finance revolution. Our relentless passion for 
                    blockchain technology drives us to revolutionize the digital landscape. 
                    With a global vision, we aim to empower individuals worldwide with access to innovative and secure 
                    decentralized financial solutions. 
                    Join us on this transformative journey,
                    shaping the future of finance and creating a world of financial freedom, inclusion, and opportunity for everyone.</p>
            </div>
            <div className='under-contact-image'>
                <img className='contact-image1' alt='img' src='https://framerusercontent.com/images/bVVAY3wSrBKllhPvXOoaHjtJWg.jpg?scale-down-to=512'/>
                <img className='contact-image2' alt='img' src='https://framerusercontent.com/images/SLhPXyV80OJYE46siivmGM8NxwE.jpg?scale-down-to=512'/>
                <img className='contact-image3' alt='img' src='https://framerusercontent.com/images/Nosls4aIxpZn5HPYqRNjbJHAHeE.jpg?scale-down-to=512'/>
            </div>
        </div>
    </div>
  )
}
