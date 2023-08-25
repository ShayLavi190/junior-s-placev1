import React from 'react'
import './Jad.css'
import e1 from './e1.gif'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import Navbar from '../../../components/Navbar/Navbar'

function Jad() {
  return (
      <div>
      <body>
        <Navbar />
      <div class="sidenav sticky-to">
      <a href="/js/part1">Basics part 1</a>
        <a href="/js/part2">Basics part 2</a>
        <a href="/js/Async">Async</a>
        <a href="/js/AJAX">AJAX</a>
        <a href="/js/jQueryandDOM">jQuery and DOM</a>
        <a href="/js/apis">Apis</a>
        <a href="/js/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-block">
                <p>With the HTML DOM, JavaScript can access and change all the elements of an HTML document.When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects:</p>
                <img  className = 'image' src= {e1}/>
                <h2>What is the DOM?</h2>
                <p>The W3C DOM standard is separated into 3 different parts:</p>
                <ul>
                    <li>Core DOM - standard model for all document types</li>
                    <li>XML DOM - standard model for XML documents</li>
                    <li>HTML DOM - standard model for HTML documents</li>
                </ul>
                <p>The HTML DOM is a standard object model and programming interface for HTML. It defines:</p>
                <ul>
                    <li>The HTML elements as objects</li>
                    <li>The properties of all HTML elements</li>
                    <li>The methods to access all HTML elements</li>
                    <li>The events for all HTML elements</li>
                </ul>
                <p>In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.</p>
                <h2>The DOM Programming Interface</h2>
                <p>The HTML DOM can be accessed with JavaScript (and with other programming languages). In the DOM, all HTML elements are defined as objects. The programming interface is the properties and methods of each object. A property is a value that you can get or set (like changing the content of an HTML element). A method is an action you can do (like add or deleting an HTML element).</p>
                <p>The most common way to access an HTML element is to use the id of the element. In the example above the getElementById method used id="demo" to find the element.</p>
                <p>The easiest way to get the content of an element is by using the innerHTML property. The innerHTML property is useful for getting or replacing the content of HTML elements.</p>
                <h2>The HTML DOM Document Object</h2>
                <p>The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. Below are some examples of how you can use the document object to access and manipulate HTML.</p>
                <h2>Finding HTML Elements</h2>
                <img  className = 'image' src= {e5}/>
                <h2>Changing HTML Elements</h2>
                <img  className = 'image' src= {e2}/>
                <h2>Adding and Deleting Elements</h2>
                <img  className = 'image' src= {e3}/>
                <h2>Adding Events Handlers</h2>
                <p><b>document.getElementById(id).onclick = function()</b> - Adding event handler code to an onclick event</p>
                <h2>Finding HTML Objects</h2>
                <img  className = 'image' src= {e4}/>
                <p><b>The easiest way to modify the content of an HTML element is by using the innerHTML property. To change the content of an HTML element, use this syntax: document.getElementById(id).innerHTML = new HTML</b></p>
                <p><b>To change the style of an HTML element, use this syntax: document.getElementById(id).style.property = new style</b></p>
                <h2>JavaScript HTML DOM Events</h2>
                <p>A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element. To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute.</p>
                <p>The onload and onunload events are triggered when the user enters or leaves the page. The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information. The onchange event is often used in combination with validation of input fields.The onload and onunload events can be used to deal with cookies. The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element. The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.</p>
                <p><b>The addEventListener() method</b></p>
                <p>The addEventListener() method attaches an event handler to the specified element. The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.You can add many event handlers to one element. You can add many event handlers of the same type to one element, i.e two "click" events. You can add event listeners to any DOM object not only HTML elements. i.e the window object. The addEventListener() method makes it easier to control how the event reacts to bubbling. When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup. You can easily remove an event listener by using the removeEventListener() method.</p>
                <h2>jQuery vs JavaScript</h2>
                <p>jQuery was created in 2006 by John Resig. It was designed to handle Browser Incompatibilities and to simplify HTML DOM Manipulation, Event Handling, Animations, and Ajax. For more than 10 years, jQuery has been the most popular JavaScript library in the world. However, after JavaScript Version 5 (2009), most of the jQuery utilities can be solved with a few lines of standard JavaScript: </p>
                <img  className = 'image' src= {e6}/>
                <h2>Code examples for the diffrences between jQuery vs JS</h2>
                <p><b>Set Text Content</b> - myElement.text("Hello Sweden!"); in jQuery and myElement.textContent = "Hello Sweden!"; in Js</p>
                <p><b>Get Text Content</b> - myText = $("#02").text(); in jQuery and myText = document.getElementById("02").textContent; in Js</p>
                <p><b>Set HTML Content</b> - myElement.html("<p>Hello World</p>"); in jQuery and myElement.innerHTML = "<p>Hello World</p>"; in Js</p>
                <p><b>Get HTML Content</b> -content = myElement.html(); in jQuery and content = myElement.innerHTML; in Js</p>
                <p><b>Hiding HTML Elements</b> - myElement.hide(); in jQuery and myElement.textContent = "Hello Sweden!"; in Js</p>
                <p><b>Showing HTML Elements</b> - myElement.show(); in jQuery and myElement.style.display = ""; in Js</p>
                <p><b>Styling HTML Elements</b> - $("#demo").css("font-size","35px"); in jQuery and document.getElementById("demo").style.fontSize = "35px"; in Js</p>
                <p><b>Removing HTML Elements</b> - $("#id02").remove(); in jQuery and document.getElementById("id02").remove(); in Js</p>
                <p><b>Get Parent Element</b> - myParent = $("#02").parent().prop("nodeName"); in jQuery and myParent = document.getElementById("02").parentNode.nodeName; in Js</p>
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

export default Jad
