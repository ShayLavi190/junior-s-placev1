import React from 'react'
import './Js.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../components/NavbarMini/NavbarMini';
function Js() {
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
      <a href="/js/part1">Basics part 1</a>
        <a href="/js/part2">Basics part 2</a>
        <a href="/js/Async">Async</a>
        <a href="/js/AJAX">AJAX</a>
        <a href="/js/jQueryandDOM">jQuery and DOM</a>
        <a href="/js/apis">Apis</a>
        <a href="/js/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="textblock2">
                  <h1 class="fontcs">JavaScript</h1>
                  <h1 class="font2cs">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, </h1>
                  <h1 class="font2cs"> alongside HTML and CSS. As of 2023,98.7% of websites use JavaScript</h1>
                  <h1 class="fontjs">choose your subject from the sidebar.</h1>
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

export default Js
