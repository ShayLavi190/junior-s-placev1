import React from 'react'
import './Explore.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../components/NavbarMini/NavbarMini';
function Explore() {
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
        <a href="/explore">Intro</a>
        <a href="/explore/tools">Tools</a>
        <a href="/explore/courses">Courses</a>
        <a href="/explore/tips">Tips</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="textblock1">
              <div class="textblock1">
                  <h1 class="fontnode">Explore for more...</h1>
                  <h1 class="font2node">In the Explore page You will find tips, additional tools and guidance for recommended continuing courses</h1>
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

export default Explore

