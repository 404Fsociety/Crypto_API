import React from 'react'
import UserList from '../components/UserList/UserList'
import WelcomeUsers from '../components/WelcomeUsers/WelcomeUsers'
import Banner from '../components/Framer'
import JoinUs from '../components/JoinUs/JoinUs'

const Users = () => {
  return (
    <div>
      <WelcomeUsers/>
      <Banner/>
      <UserList/>
      <JoinUs/>
    </div>
  )
}

export default Users