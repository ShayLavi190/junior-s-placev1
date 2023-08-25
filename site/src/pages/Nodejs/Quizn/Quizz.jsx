import React from 'react'
import { useState } from 'react'
import {quiz} from './quiz'
import Quiz from '../../../components/Quiz/Quiz'
import Navbar from '../../../components/Navbar/Navbar'
function Quizn() {
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
      <Quiz quizz={quiz}/>
      <div class="white-text-block">
      <h2>Project to try</h2>
      <p>In the following link there is couple of guided project that will help you understand Node.js better.</p>
      <a href='https://www.interviewbit.com/blog/node-js-projects/'>click here</a>
    </div>
  </body>
  </div>
  )
}

export default Quizn
