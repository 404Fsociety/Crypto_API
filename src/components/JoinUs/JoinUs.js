import React from 'react'
import './join.css'
import {Slide} from 'react-reveal'

const JoinUs = () => {
  return (
    <div className='join'>
      <Slide right>
        <div className='join-text'>
            <h1>Join Our Amazing Team</h1>
            <h3>Become part of our dynamic team today, where innovation, collaboration, 
                and personal growth fuel our collective journey to success.ly unleash cross-media information</h3>
        </div>
        </Slide>
        <div className='join-image1'>
            <img className='img1' alt='img' src='https://framerusercontent.com/images/laixt4vvyuwzXqZK8lk8ufGpk.jpg'/>
            <img className='img2' alt='img' src='https://framerusercontent.com/images/qcrhZfUDMJtmVjDNMCX6XNeksdc.jpg'/>
            <img className='img3' alt='img' src='https://framerusercontent.com/images/U9VnObefYds7Qai9XhKg7tYlrY.jpg'/>
        </div>
        <div className='join-image2'>
            <img alt='img' src='https://framerusercontent.com/images/8maDPlpUDwLeN7Wj2A46TOZrdmA.jpg?scale-down-to=512'/>
            <img alt='img' src='https://framerusercontent.com/images/2LIm83YGqNrHQo7rZSs8qbUOKCA.jpg?scale-down-to=512'/>
        </div>
    </div>
  )
}

export default JoinUs