import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='layout'>
      <h5>
        <title>Sound Systems Store</title>
      </h5>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Layout
