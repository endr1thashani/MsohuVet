import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
const Layout = () => {
  return (
    <div>
        <NavBar/>
        <main>
            <Routers/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
