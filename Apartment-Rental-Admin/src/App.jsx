import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import {Routes, Route} from "react-router-dom"
import DashboardPage from './Pages/DashboardPage'
import NotFoundPage from './Pages/NotFoundPage'
import AboutPage from './Pages/AboutPage'
import ItemDetailsPage from './Pages/itemDetailsPage'
import { useState } from 'react'


function App() {
 
  return (
    <>
    <main>
      <Navbar />
      <section className='main-section'>
        <Routes>
          <Route path='/' element={<DashboardPage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/item-details/:itemId' element={<ItemDetailsPage/>}></Route>

         
        </Routes>
            <Sidebar/>
       
      </section>
      
      <Footer/>
    </main>
      
      
    </>
  )
}

export default App
