import { Button } from '@mui/material'
import React from 'react'
import './usercard.css'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {
  const navigate = useNavigate()
  return (
    <div className='usercard'>
      <div className='usercard-content'>
        <div className='usercard-content-image'>
          <img alt='img' src={user.imageUrl}/>
        </div>
        <div className='usercard-content-text'>
          <h1>{user.name}</h1>
          <h2>Username: {user.username}</h2>
          <h3>Email: {user.email}</h3>
        </div>
        <Button onClick={()=>navigate(`/Detail/${user.id}`)} style={{padding:"0.7rem 2.5rem",background:"black",color:"white",marginTop:"1rem",borderRadius:"30px"}} >More...</Button>
      </div>
    </div>
  )
}

export default UserCard