import React from 'react'
import './Reactt.css'
import Navbar from '../../components/Navbar/Navbar'
function Reactt() {
  return (
      <div>
      <body>
        <Navbar />
        <div class="sidenav sticky-to">
        <a href="/react/part1">Basics part 1</a>
        <a href="/react/part2">Basics part 2</a>
        <a href="/react/hooks">Hooks</a>
        <a href="/react/redux">Redux</a>
        <a href="/react/axios">Axios</a>
        <a href="/react/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="">
              <div class="">
                  <h1 class="font">React</h1>
                  <h1 class="font2">React (also known as React.js) is a free and open-source front-end </h1>
                  <h1 class="font2"> JavaScript library for building user interfaces based on components.</h1>
                  <h1 class="font2">It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</h1>
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

export default Reactt

