import React from 'react'
import { useState } from 'react'
import {quiz} from './quiz'
import Quiz from '../../../components/Quiz/Quiz'
import Navbar from '../../../components/Navbar/Navbar'
function Quizr() {
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
      <Quiz quizz={quiz}/>
      <div class="white-text-block">
      <h2>Project to try</h2>
      <p>In the following link there is couple of guided project that will help you understand React better.</p>
      <a href='https://www.interviewbit.com/blog/react-projects/'>click here</a>
    </div>
  </body>
  </div>
  )
}

export default Quizr
