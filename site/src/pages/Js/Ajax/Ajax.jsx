import React from 'react'
import './Ajax.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Ajax() {
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
            <p>AJAX is a developer's dream, because you can:</p>
            <ul>
                <li>Read data from a web server - after the page has loaded</li>
                <li>Update a web page without reloading the page</li>
                <li>Send data to a web server - in the background</li>
            </ul>
            <p>AJAX = Asynchronous JavaScript And XML.AJAX is not a programming language. AJAX just uses a combination of A browser built-in XMLHttpRequest object (to request data from a web server) and JavaScript and HTML DOM (to display or use the data).</p>
            <p>AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.</p>
            <h2>How AJAX Works</h2>
            <ul>
                <li>An event occurs in a web page (the page is loaded, a button is clicked).</li>
                <li>An XMLHttpRequest object is created by JavaScript.</li>
                <li>The XMLHttpRequest object sends a request to a web server.</li>
                <li>The server processes the request.</li>
                <li>The server sends a response back to the web page.</li>
                <li>The response is read by JavaScript.</li>
                <li>Proper action (like page update) is performed by JavaScript.</li>
            </ul>
            <p>Modern Browsers can use Fetch API instead of the XMLHttpRequest Object. The Fetch API interface allows web browser to make HTTP requests to web servers. If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.</p>
            <h2>The XMLHttpRequest Object</h2>
            <p>All modern browsers support the XMLHttpRequest object. The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.</p>
            <p>The keystone of AJAX is the XMLHttpRequest object.</p>
            <ul>
                <li>Create an XMLHttpRequest object</li>
                <li>Define a callback function</li>
                <li>Open the XMLHttpRequest object</li>
                <li>Send a Request to a server</li>
            </ul>
            <img  className = 'imagejs' src= {e4}/>
            <p>All modern browsers (Chrome, Firefox, IE, Edge, Safari, Opera) have a built-in XMLHttpRequest object. Syntax for creating an XMLHttpRequest object:</p>
            <p>variable = new XMLHttpRequest();</p>
            <p>A callback function is a function passed as a parameter to another function. In this case, the callback function should contain the code to execute when the response is ready.</p>
            <p>To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object.</p>
            <p><b>XMLHttpRequest Object Methods</b></p>
            <img  className = 'imagejs' src= {e1}/>
            <p><b>XMLHttpRequest Object Properties</b></p>
            <img  className = 'imagejs' src= {e2}/>
            <h2>XMLHttpRequest</h2>
            <p>The XMLHttpRequest object is used to request data from a server.</p>
            <img  className = 'imagejs' src= {e3}/>
            <h2>Asynchronous - True or False?</h2>
            <p>Server requests should be sent asynchronously. The async parameter of the open() method should be set to true: </p>
            <p>xhttp.open("GET", "ajax_test.asp", true);</p>
            <p>By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:</p>
            <ul>
                <li>execute other scripts while waiting for server response.</li>
                <li>deal with the response after the response is ready.</li>
            </ul>
            <h2>GET or POST?</h2>
            <p>GET is simpler and faster than POST, and can be used in most cases.</p>
            <p>However, always use POST requests when:</p>
            <ul>
                <li>A cached file is not an option (update a file or database on the server).</li>
                <li>Sending a large amount of data to the server (POST has no size limitations).</li>
                <li>Sending user input (which can contain unknown characters), POST is more robust and secure than GET.</li>
            </ul>
            <p><b>A simple GET request:</b></p>
            <p>xhttp.open("GET", "demo_get.asp");</p>
            <p>xhttp.send();</p>
            <p><b>A simple POST request:</b></p>
            <p>xhttp.open("POST", "demo_post.asp");</p>
            <p>xhttp.send();</p>
            <p>To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method.</p>
            <h2>Server Response</h2>
            <p><b>Server Response Properties</b></p>
            <ul>
                <li>responseText - get the response data as a string</li>
                <li>responseXML	- get the response data as XML data</li>
            </ul>
            <p>The XMLHttpRequest object has an in-built XML parser. The responseXML property returns the server response as an XML DOM object. Using this property you can parse the response as an XML DOM object.</p>
            <p><b>Server Response Methods</b></p>
            <ul>
                <li>getResponseHeader()	- Returns specific header information from the server resource</li>
                <li>getAllResponseHeaders()	- Returns all the header information from the server resource</li>
            </ul>
            <img  className = 'imagejs' src= {e5}/>
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

export default Ajax
