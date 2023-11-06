
import React from 'react'
import "./Home.css"
import Header from '../components/Header'
import Body from '../components/Body'
import Crousel from '../components/Crousel'
function Home() {
  return (
    <div>
      {/* Header  */}
      <Header/>

      {/* Crousel */}
   
       <Crousel/>
      {/* Body */}
      <Body/>
    </div>
  )
}

export default Home
