import React from 'react'
import SEO from '../SEO/seo'
import Header from './header'
import Footer from './footer'

const Layout = ({ children } ) => {


  return (

    <React.Fragment>
      <SEO/>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </React.Fragment>

  )
}

export default Layout
