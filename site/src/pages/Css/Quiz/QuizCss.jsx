import React from 'react'
import { useState } from 'react'
import {quiz} from './quiz'
import Quiz from '../../../components/Quiz/Quiz'
import Navbar from '../../../components/Navbar/Navbar'
function QuizCss() {
   
  return (
      <div>
      <body>
        <Navbar />
      <div class="sidenav sticky-to">
      <a href="/html/part1">Basics part 1</a>
        <a href="/html/part2">Basics part 2</a>
        <a href="/html/forms">Forms</a>
        <a href="/html/media">Media</a>
        <a href="/html/apis">Apis</a>
        <a href="/html/quizz">Quiz</a>
      </div>
      <Quiz quizz = {quiz}/>
    <div class="white-text-block">
      <h2>Project to try</h2>
      <p>In the following link there is couple of guided project that will help you understand HTML and CSS better.</p>
      <a href='https://www.geeksforgeeks.org/top-10-projects-for-beginners-to-practice-html-and-css-skills/'>click here</a>
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

export default QuizCss
