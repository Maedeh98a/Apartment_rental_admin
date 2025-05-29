import React from 'react'
import { Link } from 'react-router-dom'
import AmirPicture from "../assets/Amir.jpg"
import MaedehPicture from "../assets/Maedeh.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

function AboutPage() {
  return (
    <>
    <main>
    <section className='about-description'>
      <h1>Description</h1>
      <p>The goal was to create an admin dashboard for the apartment rental platform where the admin can see and manage the apartments shown on the platform. Besides the basic project requirements, the  admin user should be able to bookmark favourite apartments for easier navigation.</p>
    </section>
    <section>
      <h1 id='our-team' >Our Team</h1>
      <section className='team-members'>
      <article className='team-details'>
        <img src={AmirPicture}/>
        <h2>Amir Mirsadeghi</h2>
        <p>Originally from Iran and living in Berlin for 10 years now.  He is working as a UI/UX Designer since five years and currently discovering the development world as an Ironhacker.</p>
        <div className='social-links'>
        <Link to="https://github.com/amirsadeghi88"><img src={github} alt="github"/></Link>
        <br></br>
        <Link to="https://www.linkedin.com/in/amirhosseinmirsadeghi/"><img src={linkedin} alt="linkedin"/></Link>
        </div>
      </article>
      <article className='team-details'>
        <img src={MaedehPicture}/>
        <h2>Maedeh Ahmadian</h2>
        <p>Maedeh is an Ironhacker student passionate about learning React. She previously studied Computer Engineering and enjoys building user-friendly web applications.</p>
        <div className='social-links'>
        <Link to="https://github.com/Maedeh98a"><img src={github} alt="github"/></Link>
        <br></br>
        <Link to="https://www.linkedin.com/in/maedeh-ahmadian/"><img src={linkedin} alt="linkedin"/></Link>
       </div>
      </article>
</section>
    </section>
    </main>
    </>
  )
}

export default AboutPage