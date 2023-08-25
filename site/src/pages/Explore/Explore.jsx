import React from 'react'
import './Explore.css'
import Navbar from '../../components/Navbar/Navbar'
function Explore() {
  return (
      <div>
      <body>
        <Navbar />
      <div class="sidenav sticky-to">
        <a href="/explore/tools">Tools</a>
        <a href="/explore/courses">Courses</a>
        <a href="/explore/tips">Tips</a>
      </div>
      <div class="container px-9 px-lg-30">
          <div class="">
              <div class="">
                  <h1 class="font">Explore for more...</h1>
                  <h1 class="font2">In the Explore page You will find tips, additional tools and guidance for recommended continuing courses</h1>
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

export default Explore

