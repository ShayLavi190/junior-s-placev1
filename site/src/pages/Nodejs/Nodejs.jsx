import React from 'react'
import './Nodejs.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../components/NavbarMini/NavbarMini';

function Nodejs() {
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
        <a href="/nodejs">Intro</a>
        <a href="/nodejs/part1">Basics part 1</a>
        <a href="/nodejs/part2">Basics part 2</a>
        <a href="/nodejs/mongodb">MongoDB</a>
        <a href="/nodejs/mysql">MySQL</a>
        <a href="/nodejs/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="textblock3">
              <div class="textblock3">
                  <h1 class="fontnode">Node.js</h1>
                  <h1 class="font2node">Node.js is a cross-platform, open-source server environment that can run on </h1>
                  <h1 class="font2node"> Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript</h1>
                  <h1 class="font2node">runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</h1>
                  <h1 class="font3node">choose your subject from the left sidebar.</h1>

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

export default Nodejs

