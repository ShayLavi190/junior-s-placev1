import React from 'react'
import './About.css'
import shayImage from './shay.jpg'
import cv from './cv.pdf'
import Navbar from '../../components/Navbar/Navbar'

function About() {
    const handeleClick = () => {
        const openPdfButton = document.getElementById('openPdfButton');
        window.open(cv, '_blank');
    }
  return (
    <div>
        <body>
            <Navbar />
            <section className="about-us">
                <div className="about">
                <img src={shayImage} alt="Shay Lavi" className='pic' />
                <div className="text texta">
                    <h2>About Me</h2>
                    <h5>Software engineer & <span>Web developer</span></h5>
                    <p>My name is Shay Lavi, 25 years old, ex-combat military officer, currently in my third year of Software Engineering first degree. Proficient in HTML, CSS, JS, Node.js, React, Python, Django,C, C++, C#, and Java. I have experience working with MongoDB, Firebase, SQLite, and AWS databases. I possess team player qualities, excellent management skills, strong human relations, and a humble, mission-driven attitude.</p>
                    <span className="data">
                    <a onClick={handeleClick} className="hire">Hire Me</a>
                    </span>
                    <span className="data">
                    <a href='https://www.linkedin.com/in/shay-lavi-04755a258/' className="hire" target='_blank'>My linkedin</a>
                    </span>
                    <span className="data">
                    <a href='https://github.com/ShayLavi190' className="hire" target='_blank'>Github account</a>
                    </span>
                </div>
                </div>
            </section>
            <footer className="py-5 bg-dark">
                <div className="container px-4 px-lg-5"><p className="m-0 text-center text-white">Copyright &copy; shay lavi 2023</p></div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>
    </body>
    </div>
  )
}

export default About
