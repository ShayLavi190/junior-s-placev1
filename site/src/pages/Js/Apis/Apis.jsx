import React from 'react'
import './Apis.css'
import e1 from './e1.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Apisj() {
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
            <p>API stands for Application Programming Interface. A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser. A Server API can extend the functionality of a web server.</p>
            <p>All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data. For example, the Geolocation API can return the coordinates of where the browser is located.</p>
            <p>Third party APIs are not built into your browser. To use these APIs, you will have to download the code from the Web.</p>
            <p>Examples:</p>
            <ul>
                <li>YouTube API - Allows you to display videos on a web site.</li>
                <li>Twitter API - Allows you to display Tweets on a web site.</li>
                <li>Facebook API - Allows you to display Facebook info on a web site.</li>
            </ul>
            <h2>JavaScript Validation API</h2>
            <p><b>Constraint Validation DOM Methods</b></p>
            <ul>
                <li>checkValidity()	- Returns true if an input element contains valid data.</li>
                <li>setCustomValidity()	- Sets the validationMessage property of an input element.</li>
            </ul>
            <p><b>Constraint Validation DOM Properties</b></p>
            <ul>
                <li>validity - Contains boolean properties related to the validity of an input element.</li>
                <li>validationMessage - Contains the message a browser will display when the validity is false.</li>
                <li>willValidate - Indicates if an input element will be validated.</li>
            </ul>
            <p><b>Validity Properties</b></p>
            <ul>
                <li>customError	- Set to true, if a custom validity message is set.</li>
                <li>patternMismatch	- Set to true, if an element's value does not match its pattern attribute.</li>
                <li>rangeOverflow - Set to true, if an element's value is greater than its max attribute.</li>
                <li>rangeUnderflow - Set to true, if an element's value is less than its min attribute.</li>
                <li>stepMismatch - Set to true, if an element's value is invalid per its step attribute.</li>
                <li>tooLong	- Set to true, if an element's value exceeds its maxLength attribute.</li>
                <li>typeMismatch - Set to true, if an element's value is invalid per its type attribute.</li>
                <li>valueMissing - Set to true, if an element (with a required attribute) has no value.</li>
                <li>valid - Set to true, if an element's value is valid.</li>
            </ul>
            <h2>Web History API</h2>
            <p>The Web History API provides easy methods to access the windows.history object. The window.history object contains the URLs (Web Sites) visited by the user.</p>
            <p><b>History Object Methods</b></p>
            <ul>
                <li>back() - Loads the previous URL in the history list</li>
                <li>forward() - Loads the next URL in the history list</li>
                <li>go() - Loads a specific URL from the history list</li>
            </ul>
            <p><b>History Object Properties</b></p>
            <ul>
                <li>length	Returns the number of URLs in the history list</li>
            </ul>
            <h2>Web Storage API</h2>
            <p>The Web Storage API is a simple syntax for storing and retrieving data in the browser.</p>
            <p>The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain. The data is stored with no expiration date, and will not be deleted when the browser is closed. The data will be available for days, weeks, and years.</p>
            <p>The sessionStorage object is identical to the localStorage object. The difference is that the sessionStorage object stores data for one session. The data is deleted when the browser is closed.</p>
            <p><b>Storage Object Properties and Methods</b></p>
            <ul>
                <li>key(n) - Returns the name of the nth key in the storage</li>
                <li>length - Returns the number of data items stored in the Storage object</li>
                <li>getItem(keyname) - Returns the value of the specified key name</li>
                <li>setItem(keyname, value)	- Adds a key to the storage, or updates a key value (if it already exists)</li>
                <li>removeItem(keyname)	- Removes that key from the storage</li>
                <li>clear()	- Empty all key out of the storage</li>
            </ul>
            <h2>Web Workers API</h2>
            <p>A web worker is a JavaScript running in the background, without affecting the performance of the page.</p>
            <p>When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.</p>
            <h2>JavaScript Fetch API</h2>
            <p>The Fetch API interface allows web browser to make HTTP requests to web servers.</p>
            <img  className = 'imagejs' src= {e1}/>
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

export default Apisj
