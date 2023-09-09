import React from 'react'
import './Part1j.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import e7 from './e7.png'
import e8 from './e8.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Part1j() {
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
            <div class="white-text-blockcs">
                <p><b>JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games. It works seamlessly alongside HTML and CSS, complementing CSS in formatting HTML elements while providing user interaction, a capability that CSS alone lacks. JavaScript’s widespread applications in web, mobile app, and game development make it a valuable language to learn.</b></p>
                <h2>JavaScript Can Change HTML Content</h2>
                <p>One of many JavaScript HTML methods is getElementById(). The method "finds" an HTML element (with id="demo"), and changes the element content (innerHTML).You can change by this method visability, style, position etc. of elements.</p>
                <h2>JavaScript Where To</h2>
                <p>In HTML, JavaScript code is inserted between &lt;script&gt; and &lt;/script&gt; tags. External scripts are practical when the same code is used in many different web pages. JavaScript files have the file extension .js.To use an external script, put the name of the script file in the src (source) attribute of a &lt;script&gt; tag.</p>
                <h2>JavaScript Output</h2>
                <p><b>JavaScript can "display" data in different ways:</b></p>
                <ul>
                    <li>Writing into an HTML element, using innerHTML.</li>
                    <li>Writing into the HTML output using document.write().</li>
                    <li>Writing into an alert box, using window.alert().</li>
                    <li>Writing into the browser console, using console.log().</li>
                </ul>
                <p><b>JavaScript Keywords: </b></p>
                <ul>
                    <li>var	- declares a variable</li>
                    <li>let	- declares a block variable</li>
                    <li>const - declares a block constant</li>
                    <li>if - marks a block of statements to be executed on a condition</li>
                    <li>switch - marks a block of statements to be executed in different cases</li>
                    <li>for	- Marks a block of statements to be executed in a loop</li>
                    <li>return - Exits a function</li>
                    <li>try	- Implements error handling to a block of statements</li>
                </ul>
                <p><b>When to Use var, let, or const?</b></p>
                <ul>
                    <li>Always declare variables.</li>
                    <li>Always use const if the value should not be changed.</li>
                    <li>Only use let if you can't use const.</li>
                    <li>Only use var if you MUST support old browsers.</li>
                </ul>
                <h2>Value = undefined</h2>
                <p>In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input. A variable declared without a value will have the value undefined.</p>
                <h2>Block Scope</h2>
                <p>Before ES6 (2015), JavaScript had Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope in JavaScript. Variables declared inside a { } block cannot be accessed from outside the block</p>
                <h2>Difference Between var, let and const</h2>
                <img  className = 'imagejs' src= {e1}/>
                <h2>JavaScript Operators</h2>
                <p><b>JavaScript Arithmetic Operators</b></p>
                <img  className = 'imagejs' src= {e2}/>
                <h2>JavaScript Assignment Operators</h2>
                <img  className = 'imagejs' src= {e3}/>
                <h2>JavaScript Comparison Operators</h2>
                <img  className = 'imagejs' src= {e4}/>
                <h2>JavaScript Logical Operators</h2>
                <img  className = 'imagejs' src= {e5}/>                
                <h2>JavaScript Type Operators</h2>
                <img  className = 'imagejs' src= {e6}/>
                <h2>JavaScript Bitwise Operators</h2>
                <img  className = 'imagejs' src= {e7}/>
                <p><b>JavaScript has 8 Datatypes</b></p>
                <ul>
                    <li>String</li>
                    <li>Number</li>
                    <li>Bigint</li>
                    <li>Boolean</li>
                    <li>Undefined</li>
                    <li>Null</li>
                    <li>Symbol</li>
                    <li>Object</li>
                </ul>
                <h2>JavaScript Functions</h2>
                <p>A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().</p>
                <p>function name(parameter1, parameter2, parameter3) &#123;code to be executed&#125;</p>
                <p>The code inside the function will execute when "something" invokes (calls) the function:</p>
                <ul>
                    <li>When an event occurs (when a user clicks a button).</li>
                    <li>When it is invoked (called) from JavaScript code.</li>
                    <li>Automatically (self invoked).</li>
                </ul>
                <p>When JavaScript reaches a return statement, the function will stop executing.</p>
                <p>The () operator invokes (calls) the function. Variables declared within a JavaScript function, become LOCAL to the function.</p>
                <h2>JavaScript Objects</h2>
                <p>In real life, a car is an object. A car has properties like weight and color, and methods like start and stop. All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times.</p>
                <p>Example for an object: const person = &#123;firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"&#125;;</p>
                <p>The name:values pairs in JavaScript objects are called properties (firstName:"John").</p>
                <p>Objects can also have methods. For example : fullName	function() &#123;return this.firstName + " " + this.lastName;&#125;</p>
                <p>In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).</p>
                <h2>JavaScript Events</h2>
                <p>HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.</p>
                <p><b>Common HTML Events:</b></p>
                <ul>
                    <li>onchange - An HTML element has been changed</li>
                    <li>onclick - he user clicks an HTML element</li>
                    <li>onmouseover	- The user moves the mouse over an HTML element</li>
                    <li>onmouseout - The user moves the mouse away from an HTML element</li>
                    <li>onkeydown - The user pushes a keyboard key</li>
                    <li>onload - The browser has finished loading the page</li>
                </ul>
                <h2>JavaScript String Methods</h2>
                <p><b>length</b> - The length property returns the length of a string</p>
                <p><b>slice()</b> - slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).</p>
                <p><b>substring()</b> - substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().</p>
                <p><b>substr()</b> - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.</p>
                <p><b>Replacing String Content</b> - The replace() method replaces a specified value with another value in a string. By default, the replace() method replaces only the first match.</p>
                <p><b>ReplaceAll()</b> - The replaceAll() method allows you to specify a regular expression instead of a string to be replaced. If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.</p>
                <p><b>Converting to Upper and Lower Case</b> - A string is converted to upper case with toUpperCase(). A string is converted to lower case with toLowerCase().</p>
                <p><b>concat()</b> - concat() joins two or more strings. The concat() method can be used instead of the plus operator. These two lines do the same.</p>
                <p><b>trim()</b> - The trim() method removes whitespace from both sides of a string.</p>
                <p><b>padStart()</b> - The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.</p>
                <p><b>charAt()</b> - The charAt() method returns the character at a specified index (position) in a string.</p>
                <p><b>split()</b> - A string can be converted to an array with the split() method.</p>
                <p><b>indexOf()</b> - The indexOf() method returns the index (position) the first occurrence of a string in a string.</p>
                <p><b>lastIndexOf()</b> - The lastIndexOf() method returns the index of the last occurrence of a specified text in a string. Both indexOf(), and lastIndexOf() return -1 if the text is not found.</p>
                <p><b>search()</b> - The search() method searches a string for a string (or a regular expression) and returns the position of the match.
                The indexOf() and search() are not equal. The search() method cannot take a second start position argument. The indexOf() method cannot take powerful search values (regular expressions).</p>
                <p><b>match()</b> - The match() method returns an array containing the results of matching a string against a string (or a regular expression).</p>
                <p><b>matchAll()</b> - The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).</p>
                <p><b>includes()</b> - The includes() method returns true if a string contains a specified value. Otherwise it returns false.</p>
                <p><b>startsWith()</b> - The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false.</p>
                <p><b>endsWith()</b> -The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false.</p>
                <img  className = 'imagejs' src= {e8}/>
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

export default Part1j
