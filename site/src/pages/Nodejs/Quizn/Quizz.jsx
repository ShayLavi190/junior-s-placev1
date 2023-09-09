import React from 'react'
import {quiz} from './quiz'
import Quiz from '../../../components/Quiz/Quiz'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Quizn() {
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
        <a href="/nodejs">Intro</a>
        <a href="/nodejs/part1">Basics part 1</a>
        <a href="/nodejs/part2">Basics part 2</a>
        <a href="/nodejs/mongodb">MongoDB</a>
        <a href="/nodejs/mysql">MySQL</a>
        <a href="/nodejs/quizz">Quiz</a>
      </div>
      <Quiz quizz={quiz}/>
      <div class="white-text-blockquiz">
      <h2>Project to try</h2>
      <p>In the following link there is couple of guided project that will help you understand Node.js better.</p>
      <a href='https://www.interviewbit.com/blog/node-js-projects/'>click here</a>
    </div>
  </body>
  </div>
  )
}

export default Quizn
