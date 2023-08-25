import React from 'react'
import './Nodejs.css'
import Navbar from '../../components/Navbar/Navbar'
function Nodejs() {
  return (
      <div>
      <body>
        <Navbar />
        <div class="sidenav sticky-to">
      <a href="/nodejs/part1">Basics part 1</a>
        <a href="/nodejs/part2">Basics part 2</a>
        <a href="/nodejs/mongodb">MongoDB</a>
        <a href="/nodejs/mysql">MySQL</a>
        <a href="/nodejs/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="">
              <div class="">
                  <h1 class="font">Node.js</h1>
                  <h1 class="font2">Node.js is a cross-platform, open-source server environment that can run on </h1>
                  <h1 class="font2"> Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript</h1>
                  <h1 class="font2">runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</h1>
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

export default Nodejs

