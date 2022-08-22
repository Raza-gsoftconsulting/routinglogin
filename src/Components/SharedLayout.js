import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

const SharedLayout = ({user,setUser}) => {
  return (
    <div>
        <Header user={user} setUser={setUser}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout;