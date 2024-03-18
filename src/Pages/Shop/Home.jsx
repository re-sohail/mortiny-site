import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Activity from '../../Components/Activity/Activity'
import Conversation from '../../Components/Conversation/Conversation'
import Security from '../../Components/Security/Security'
import BookME from '../../Components/Bookme/BookME'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Activity />
    <Conversation />
    <Security />
    <BookME />
    <Footer />
    </>
  )
}

export default Home