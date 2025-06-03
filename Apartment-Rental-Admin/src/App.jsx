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
import {results} from "./data/listings.json"
import UpdateItemForm from './components/UpdateItemForm'
import AddNewAparatment from './Pages/AddNewAparatment'


function App() {
 const [data, setData] = useState(results);
  return (
    <>
    <main>
      <Navbar />
      <section className='main-section'>
        <Routes>
          <Route path='/' element={<DashboardPage data={data} setData={setData}/>}></Route>
          <Route path='/add-apartment' element={<AddNewAparatment data={data} setData={setData}/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/item-details/:itemId' element={<ItemDetailsPage data={data} setData={setData}/>}></Route>
          <Route path='/update/:itemId' element={<UpdateItemForm data={data} setData={setData}/>}></Route>

         
        </Routes>
            {/* <Sidebar/> */}
       
      </section>
      
      <Footer/>
    </main>
      
      
    </>
  )
}

export default App
