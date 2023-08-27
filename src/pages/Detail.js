import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Slide} from 'react-reveal'

const Detail = () => {
    const {id} = useParams()

    const [user,setUser] = useState({})

    useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then ((res)=>setUser(res.data[0]))
      .catch((err)=> console.log(err))
    }, [id])
    
  return (
    <Slide right>
    <div style={{height:"100%",margin:"8rem 8rem",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",background:"linear-gradient(99deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)",padding:"2rem",borderRadius:"30px"}}>
        <div style={{display:"flex",alignItems:"center"}} >
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Name : </h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.name}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Username :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.username}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Email :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.email}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>address (street) :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.address?.street}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>address (suite) :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.address?.suite}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>address (city) :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.address?.city}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>address (zip code) :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.address?.zipcode}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Phone :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.phone}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Website :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.website}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Company Name :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.company?.name}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Company Catch Phrase :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.company?.catchPhrase}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
            <h1 style={{color:"rgb(90, 223, 137)",fontFamily:"monospace",fontWeight:"600",fontSize:"35px"}}>Company Bs :</h1>
            <h3 style={{color:"white",fontFamily:"monospace",fontWeight:"400",fontSize:"30px"}}>{user.company?.bs}</h3>
        </div>
    </div>
    </Slide>
  )
}

export default Detail