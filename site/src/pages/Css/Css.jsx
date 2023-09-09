import React from 'react'
import './Css.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../components/NavbarMini/NavbarMini';
function Css() {
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
      <body>
      {isMobile ? <NavbarMini /> : <Navbar />}
      <div class="sidenavv sticky-to" style={{width:'120px'}}>
        <a href="/css">Intro</a>
        <a href="/css/part1">Basics part 1</a>
        <a href="/css/part2">Basics part 2</a>
        <a href="/css/advancedpart1">Advanced part 1</a>
        <a href="/css/advancedpart2">Advanced part 2</a>
        <a href="/css/quiz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="">
              <div class="textblockcss">
                  <h1 class="fontcs">Cascading Style Sheets (CSS)</h1>
                  <h1 class="font2cs">CSS is a style sheet language used for describing the presentation</h1>
                  <h1 class="font2cs"> of a document written in a markup language such as HTML or XML</h1>
                  <h1 class="font2cs">(including XML dialects such as SVG, MathML or XHTML).</h1>
                  <h1 class="font3cs">choose your subject from the  left sidebar.</h1>

              </div>
          </div>
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

export default Css
