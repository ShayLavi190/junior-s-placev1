import './HomePage.css';
import React, { useState, useEffect } from 'react';
import jsonData from '../../model/HomePage.json';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMini from '../../components/NavbarMini/NavbarMini';

function HomePage() {
    const divElements = jsonData.pages
        ? jsonData.pages.map((page, index) => (
              <div key={index} className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">{page.page_title}</h2>
                          <p className="card-text">{page.page_description}</p>
                      </div>
                      <div className="card-footer">
                          <a className="btn btn-primary btn-sm" href={page.href}>
                              More Info
                          </a>
                      </div>
                  </div>
              </div>
          ))
        : null;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
          };
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
    return (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
                {isMobile ? <NavbarMini /> : <Navbar />}
                <div>
                    <div className='con'>
                        <div>
                        <h1 className="font2 display-4 mb-4" style={{paddingRight:'100px'}}>Welcome to Junior's Place</h1>
                        <h2 className="font2 h4 mb-4" style={{paddingRight:'100px'}}>The perfect place to develop your skills as a web developer</h2>
                        <h2 className="font2 h4" style={{paddingRight:'100px'}}>In this site, you can learn about web development from front to back</h2>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5">
                        {divElements}
                    </div>
                </div>
                <footer className="py-4 bg-dark">
                    <div className="container px-4 px-lg-5"><p className="m-0 text-center text-white">Copyright &copy; shay lavi 2023</p></div>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        </html>
    );
}

export default HomePage;
