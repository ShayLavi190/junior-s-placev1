import React from 'react'
import './Reactt.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../components/NavbarMini/NavbarMini';

function Reactt() {
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
        <a href="/react/part1">Basics part 1</a>
        <a href="/react/part2">Basics part 2</a>
        <a href="/react/hooks">Hooks</a>
        <a href="/react/redux">Redux</a>
        <a href="/react/axios">Axios</a>
        <a href="/react/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="textblock4">
              <div class="textblock4">
                  <h1 class="fontnode">React</h1>
                  <h1 class="font2node">React (also known as React.js) is a free and open-source front-end </h1>
                  <h1 class="font2node"> JavaScript library for building user interfaces based on components.</h1>
                  <h1 class="font2node">It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</h1>
                  <h1 class="font3node">choose your subject from the sidebar.</h1>
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

export default Reactt

