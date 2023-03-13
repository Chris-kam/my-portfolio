import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Imag"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
               <FaAward className='about__icon' />
               <h5>Experience</h5>
               <small>3+ Years Working</small>
            </article>
            <article className="about__card">
               <FiUser className='about__icon' />
               <h5>Clients</h5>
               <small>3+ 200+ Worldwide</small>
            </article>
            <article className="about__card">
               <VscFolderLibrary className='about__icon' />
               <h5>Projects</h5>
               <small>80+</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Numquam porro ut suscipit ea molestias, quaerat magni pariatur 
            tempora delectus dolores? Suscipit rem iste iusto, minus in commodi ut 
            nihil delectus.
          </p>
          <a className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About