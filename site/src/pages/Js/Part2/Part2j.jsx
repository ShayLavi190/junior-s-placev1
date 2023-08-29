import React from 'react'
import './Part2j.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Part2j() {
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
                <h2>JavaScript Number Methods</h2>
                <p><b>These number methods can be used on all JavaScript numbers:</b></p>
                <ul>
                    <li>toString() - Returns a number as a string</li>
                    <li>toExponential()	- Returns a number written in exponential notation</li>
                    <li>toFixed() - Returns a number written with a number of decimals</li>
                    <li>toPrecision() - Returns a number written with a specified length</li>
                    <li>ValueOf() - Returns a number as a number</li>
                </ul>
                <h2>JavaScript Arrays</h2>
                <p>An array is a special variable, which can hold more than one value.</p>
                <p>For example: const cars = ["Saab", "Volvo", "BMW"];</p>
                <p>For access and change an array element by referring to the index number (let car = cars[0];).</p>
                <p>Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.</p>
                <h2>JavaScript Array Methods</h2>
                <p><b>length</b>The length property returns the length (size) of an array.</p>
                <p><b>toString()</b>The JavaScript method toString() converts an array to a string of (comma separated) array values.</p>
                <p><b>join()</b>The join() method also joins all array elements into a string.</p>
                <p><b>pop()</b>The pop() method removes the last element from an array and return the value that was "popped out".</p>
                <p><b>push()</b>The push() method adds a new element to an array (at the end) and return the new array.</p>
                <p><b>shift()</b>The shift() method removes the first array element and "shifts" all other elements to a lower index and return the value that was "shifted out".</p>
                <p><b>unshift()</b>The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements and return the new array length.</p>
                <p><b>delete()</b>Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array. Use pop() or shift() instead.</p>
                <p><b>concat()</b>The concat() method creates a new array by merging (concatenating) existing arrays.</p>
                <p><b>flat()</b>The flat() method creates a new array with sub-array elements concatenated to a specified depth.</p>
                <p><b>splice()</b>The splice() method adds new items to an array.</p>
                <p><b>slice()</b>The slice() method slices out a piece of an array.</p>
                <p><b>sort()</b>The sort() method sorts an array alphabetically.</p>
                <p><b>reverse()</b>The reverse() method reverses the elements in an array.</p>
                <p><b>forEach()</b>The forEach() method calls a function (a callback function) once for each array element.</p>
                <p><b>map()</b>The map() method creates a new array by performing a function on each array element. The map() method does not execute the function for array elements without values. The map() method does not change the original array.</p>
                <p><b>flatMap()</b>The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.</p>
                <p><b>filter()</b>The filter() method creates a new array with array elements that pass a test.</p>
                <p><b>reduce()</b>The reduce() method runs a function on each array element to produce (reduce it to) a single value. The reduce() method works from left-to-right in the array.</p>
                <p><b>every()</b>The every() method checks if all array values pass a test.</p>
                <p><b>some()</b>The some() method checks if some array values pass a test.</p>
                <p><b>indexOf()</b>The indexOf() method searches an array for an element value and returns its position.</p>
                <p><b>find()</b>The find() method returns the value of the first array element that passes a test function.</p>
                <p><b>findIndex()</b>The findIndex() method returns the index of the first array element that passes a test function.</p>
                <p><b>Array.from()</b>The Array.from() method returns an Array object from any object with a length property or any iterable object.</p>
                <p><b>Array.keys()</b>The Array.keys() method returns an Array Iterator object with the keys of an array.</p>
                <p><b>entries()</b>The entries() method returns an Array Iterator object with key/value pairs.</p>
                <p><b>...</b>  The ... operator expands an iterable (like an array) into more elements:</p>
                <h2>JavaScript Date Objects</h2>
                <p>By default, JavaScript will use the browser's time zone and display a date as a full text string: Sun Aug 20 2023 15:54:56 GMT+0300 (שעון ישראל (קיץ))</p>
                <p>Date objects are created with the new Date() constructor. There are 9 ways to create a new date object:</p> 
                <ul>
                    <li>new Date()</li>
                    <li>new Date(date string)</li>
                    <li>new Date(y,m)</li>
                    <li>new Date(y,m,d)</li>
                    <li>new Date(y,m,d,h)</li>
                    <li>Date(y,m,d,h,m)</li>
                    <li>new Date(y,m,d,h,m,s)</li>
                    <li>new Date(y,m,d,h,m,s,ms)</li>
                    <li>new Date(milliseconds)</li>
                </ul>
                <p>JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone.</p>
                <p><b>JavaScript Date Input</b></p>
                <ul>
                    <li>ISO Date - "2015-03-25" (The International Standard)</li>
                    <li>Short Date - "03/25/2015"</li>
                    <li>Long Date - "Mar 25 2015" or "25 Mar 2015"</li>
                </ul>
                <h2>JavaScript Math Object</h2>
                <p>The JavaScript Math object allows you to perform mathematical tasks on numbers.Unlike other objects, the Math object has no constructor. The Math object is static. All methods and properties can be used without creating a Math object first.</p>
                <h2>JavaScript Math Methods</h2>
                <img  className = 'imagejs' src= {e1}/>
                <h2>JavaScript Booleans</h2>
                <p>A JavaScript Boolean represents one of two values: true or false.</p>
                <h2>JavaScript if, else, and else if</h2>
                <p>Conditional statements are used to perform different actions based on different conditions. Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this.</p>
                <p><b>In JavaScript we have the following conditional statements:</b></p>
                <ul>
                    <li>Use if to specify a block of code to be executed, if a specified condition is true.</li>
                    <li>Use else to specify a block of code to be executed, if the same condition is false.</li>
                    <li>Use else if to specify a new condition to test, if the first condition is false.</li>
                    <li>Use switch to specify many alternative blocks of code to be executed.</li>
                </ul>
                <p>Example for switch:</p>
                <img  className = 'imagejs' src= {e2}/>
                <h2>JavaScript Loops</h2>
                <p><b>JavaScript supports different kinds of loops:</b></p>
                <ul>
                    <li>for - loops through a block of code a number of times.</li>
                    <li>while - loops through a block of code while a specified condition is true.</li>
                    <li>do/while - also loops through a block of code while a specified condition is true.</li>
                </ul>
                <p>When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.The JavaScript for in statement loops through the properties of an Object and the JavaScript for of statement loops through the values of an iterable object. The break statement "jumps out" of a loop. The continue statement "jumps over" one iteration in the loop. </p>
                <h2>JavaScript Iterables</h2>
                <p>Iterables are iterable objects (like Arrays). Iterables can be accessed with simple and efficient code. Iterables can be iterated over with for..of loops</p>
                <h2>JavaScript Sets</h2>
                <p>A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.</p>
                <p><b>Essential Set Methods: </b></p>
                <ul>
                    <li>new Set() - Creates a new Set</li>
                    <li>add() - Adds a new element to the Set</li>
                    <li>delete() - Removes an element from a Set</li>
                    <li>has() - Returns true if a value exists in the Set</li>
                    <li>forEach() - Invokes a callback for each element in the Set</li>
                    <li>values() - Returns an iterator with all the values in a Set</li>
                    <li>size - Returns the number of elements in a Set</li>
                </ul>
                <h2>JavaScript Maps</h2>
                <p>A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.</p>
                <p><b>Essential Map Methods</b></p>
                <ul>
                    <li>new Map() - Creates a new Map</li>
                    <li>set() - Sets the value for a key in a Map</li>
                    <li>get() - Gets the value for a key in a Map</li>
                    <li>delete() - Removes a Map element specified by the key</li>
                    <li>has() - Returns true if a key exists in a Map</li>
                    <li>forEach() - Calls a function for each key/value pair in a Map</li>
                    <li>entries() - Returns an iterator with the [key, value] pairs in a Map</li>
                    <li>size - Returns the number of elements in a Map</li>
                </ul>
                <p><b>JavaScript Objects vs Maps:</b></p>
                <img  className = 'imagejs' src= {e3}/>
                <h2>JavaScript Errors</h2>
                <p>When executing JavaScript code, different errors can occur. Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.</p>
                <p>The try statement defines a code block to run (to try). The catch statement defines a code block to handle any error. The finally statement defines a code block to run regardless of the result. The throw statement defines a custom error.</p>
                <h2>JavaScript Scope</h2>
                <img  className = 'imagejs' src= {e4}/>
                <h2>JavaScript Use Strict</h2>
                <p>"use strict"; Defines that JavaScript code should be executed in "strict mode". The "use strict" directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. All modern browsers support "use strict" except Internet Explorer 9 and lower</p>
                <h2>JavaScript Arrow Function</h2>
                <p>Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax:</p>
                <p>let myFunction = (a, b) =&gt; a * b;</p>
                <p>In short, with arrow functions there are no binding of this. With arrow functions the this keyword always represents the object that defined the arrow function.</p>
                <h2>JavaScript Closures</h2>
                <p>JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures.</p>
                <p><b>Example:</b></p>
                <img  className = 'imagejs' src= {e5}/>
                <h2>JavaScript Modules</h2>
                <p>JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain a code-base. Modules are imported from external files with the import statement. Modules with functions or variables can be stored in any external file. There are two types of exports: Named Exports and Default Exports.</p>
                <h2>JavaScript JSON</h2>
                <p>JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page.</p>
                <p><b>What is JSON?</b></p>
                <ul>
                    <li>JSON stands for JavaScript Object Notation</li>
                    <li>JSON is a lightweight data interchange format</li>
                    <li>JSON is language independent *</li>
                    <li>JSON is "self-describing" and easy to understand</li>
                </ul>
                <p>* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language. The JSON format is syntactically identical to the code for creating JavaScript objects. Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects. A common use of JSON is to read data from a web server, and display the data in a web page. JSON.parse() is a built-in function that use to convert the string into a JavaScript object. A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify().</p>
                <img  className = 'imagejs' src= {e6}/>
                <h2>JavaScript Best Practices</h2>
                <ul>
                    <li><b>Avoid Global Variables</b> - Minimize the use of global variables. This includes all data types, objects, and functions.</li>
                    <li><b>Always Declare Local Variables</b> - All variables used in a function should be declared as local variables. Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables.</li>
                    <li><b>Declare Objects and Arrays with const</b> - Declaring objects and arrays with const will prevent any accidental change of type.</li>
                    <li><b>Don't Use new Object()</b> - <ul><li>Use "" instead of new String()</li><li>Use 0 instead of new Number()</li><li>Use false instead of new Boolean()</li><li>Use {} instead of new Object()</li><li>Use [] instead of new Array()</li><li>Use /()/ instead of new RegExp()</li><li>Use function (){} instead of new Function()</li></ul></li>
                    <li><b>Use === Comparison</b> - MThe == comparison operator always converts (to matching types) before comparison. The === operator forces comparison of values and type.</li>
                    <li><b>End Your Switches with Defaults</b> - Always end your switch statements with a default. Even if you think there is no need for it.</li>
                    <li><b>Avoid Number, String, and Boolean as Objects</b> - Always treat numbers, strings, or booleans as primitive values. Not as objects. Declaring these types as objects, slows down execution speed, and produces nasty side effects.</li>
                    <li><b>Avoid Using eval()</b> - The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it. Because it allows arbitrary code to be run, it also represents a security problem.</li>
                </ul>
                <h2>JavaScript Performance</h2>
                <p><b>Here are some tips to optimize the runtime of your code:</b></p>
                <ul>
                    <li>Reduce Activity in Loops - Loops are often used in programming. Each statement in a loop, including the for statement, is executed for each iteration of the loop. Statements or assignments that can be placed outside the loop will make the loop run faster.</li>
                    <li>Reduce DOM Access - Accessing the HTML DOM is very slow, compared to other JavaScript statements. If you expect to access a DOM element several times, access it once, and use it as a local variable.</li>
                    <li>Reduce DOM Size - Keep the number of elements in the HTML DOM small. This will always improve page loading, and speed up rendering (page display), especially on smaller devices. Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.</li>
                    <li>Avoid Unnecessary Variables - Don't create new variables if you don't plan to save values.</li>
                    <li>Delay JavaScript Loading - Putting your scripts at the bottom of the page body lets the browser load the page first. While a script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked.</li>
                </ul>
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

export default Part2j
