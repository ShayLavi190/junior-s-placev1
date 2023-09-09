import React from 'react'
import {quiz} from './quiz'
import Quiz from '../../../components/Quiz/Quiz'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Quizj() {   
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
        <a href="/js">Intro</a>
        <a href="/js/part1">Basics part 1</a>
        <a href="/js/part2">Basics part 2</a>
        <a href="/js/Async">Async</a>
        <a href="/js/AJAX">AJAX</a>
        <a href="/js/jQueryandDOM">jQuery and DOM</a>
        <a href="/js/apis">Apis</a>
        <a href="/js/quizz">Quiz</a>
      </div>
      <Quiz quizz={quiz}/>
      <div class="white-text-blockquiz">
      <h2>Project to try</h2>
      <p>In the following link there is couple of guided project that will help you understand JavaScript better.</p>
      <a href='https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-a-restaurant-menu-page'>click here</a>
    </div>
  </body>
  </div>
  )
}

export default Quizj
