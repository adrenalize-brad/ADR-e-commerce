import React from 'react'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import '../styles/styles.scss';

const Layout = ({ children} ) => {


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
