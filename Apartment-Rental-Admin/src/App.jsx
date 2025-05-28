import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ApartmentList from './components/ApartmentList'

function App() {
 
  return (
    <>
    <main>
      <Navbar />
      <section className='main-section'>
       <section>
             <ApartmentList/>
           
        </section>
        
            <Sidebar/>
       
      </section>
      
      <Footer/>
    </main>
      
      
    </>
  )
}

export default App
