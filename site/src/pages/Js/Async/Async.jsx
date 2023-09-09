import React from 'react'
import './Async.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'


function Aysnc() {
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
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockjs">
                <h2>JavaScript Callbacks</h2>
                <p>A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished</p>
                <p>Example of callback function:</p>
                <img  className = 'imagejs' src= {e1}/>
                <h2>What is Callback Hell ? </h2>
                <p>Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.</p>
                <img  className = 'imagejs' src= {e2}/>
                <h2>Asynchronous JavaScript</h2>
                <p>Functions running in parallel with other functions are called asynchronous.</p>
                <h2>JavaScript Promises</h2>
                <p>"Producing code" is code that can take some time. "Consuming code" is code that must wait for the result. A Promise is a JavaScript object that links producing code and consuming code</p>
                <p><b>A JavaScript Promise object can be:</b></p>
                <ul>
                    <li>Pending</li>
                    <li>Fulfilled</li>
                    <li>Rejected</li>
                </ul>
                <p>The Promise object supports two properties: state and result. While a Promise object is "pending" (working), the result is undefined. When a Promise object is "fulfilled", the result is a value. When a Promise object is "rejected", the result is an error object.</p>
                <img  className = 'imagejs' src= {e3}/>
                <p>async makes a function return a Promise. await makes a function wait for a Promise. The keyword async before a function makes the function return a promise. The await keyword can only be used inside an async function. The await keyword makes the function pause the execution and wait for a resolved promise before it continues</p>
                <img  className = 'imagejs' src= {e4}/>
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

export default Aysnc
