import React from 'react'
import './Css.css'
import Navbar from '../../components/Navbar/Navbar'
function Css() {
  return (
      <div>
      <body>
        <Navbar />
      <div class="sidenav sticky-to">
        <a href="/css/part1">Basics part 1</a>
        <a href="/css/part2">Basics part 2</a>
        <a href="/css/advancedpart1">Advanced part 1</a>
        <a href="/css/advancedpart2">Advanced part 2</a>
        <a href="/css/quiz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="">
              <div class="">
                  <h1 class="font">Cascading Style Sheets (CSS)</h1>
                  <h1 class="font2">CSS is a style sheet language used for describing the presentation</h1>
                  <h1 class="font2"> of a document written in a markup language such as HTML or XML</h1>
                  <h1 class="font2">(including XML dialects such as SVG, MathML or XHTML).</h1>
                  <h1 class="font3">choose your subject from the sidebar.</h1>

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
