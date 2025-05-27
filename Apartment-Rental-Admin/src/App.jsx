import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
    <body>
      <Navbar />
      <section className='main-section'>
        <section>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cum dolore placeat quibusdam ullam doloribus saepe fugiat sapiente, harum, quia eius vel doloremque, voluptas distinctio vitae eligendi ducimus totam rem.</p>
           
        </section>
        
            <Sidebar/>
       
      </section>
      
      <Footer/>
    </body>
      
      
    </>
  )
}

export default App
