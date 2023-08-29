import React from 'react'
import {quiz} from './quiz'
import Quiz from '../../../components/Quiz/Quiz'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
import { useEffect,useState } from 'react'

function Quizr() {
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
        <a href="/react/part1">Basics part 1</a>
        <a href="/react/part2">Basics part 2</a>
        <a href="/react/hooks">Hooks</a>
        <a href="/react/redux">Redux</a>
        <a href="/react/axios">Axios</a>
        <a href="/react/quizz">Quiz</a>
      </div>
      <Quiz quizz={quiz}/>
      <div class="white-text-blockquiz">
      <h2>Project to try</h2>
      <p>In the following link there is couple of guided project that will help you understand React better.</p>
      <a href='https://www.interviewbit.com/blog/react-projects/'>click here</a>
    </div>
  </body>
  </div>
  )
}

export default Quizr
