import React from 'react'
import { useEffect,useState } from 'react'
import './Html.css'
import Navbar from '../../components/Navbar/Navbar'
import NavbarMini from '../../components/NavbarMini/NavbarMini'

function Html() {
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
      <div>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
      <body>
      {isMobile ? <NavbarMini /> : <Navbar />}
      <div class="sidenavv sticky-to" style={{width:'120px'}}>
        <a href="/html/part1">Basics part 1</a>
        <a href="/html/part2">Basics part 2</a>
        <a href="/html/forms">Forms</a>
        <a href="/html/media">Media</a>
        <a href="/html/apis">Apis</a>
        <a href="/html/quizz">Quiz</a>
      </div>
      <div className='textblock'>
                  <h1 class="fontt">HTML</h1>
                  <h1 class="font22">The HyperText Markup Language or HTML is the standard</h1>
                  <h1 class="font22">markup language for documents designed to be displayed in a web browser.</h1>
                  <h1 class="font33">choose your subject from the sidebar.</h1>
      </div>
      <footer class="py-3 bg-dark fixed-bottom">
          <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; shay lavi 2023</p></div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
  </body>
  </div>
  )
}

export default Html
