import React from 'react'
import './Part1.css'
import Navbar from '../../../components/Navbar/Navbar'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Part1n() {
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
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockjs">
              <h2>What is Node.js?</h2>
              <ul>
                <li>Node.js is an open source server environment</li>
                <li>Node.js is free</li>
                <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
                <li>Node.js uses JavaScript on the server</li>
              </ul>
              <p>A common task for a web server can be to open a file on the server and return the content to the client.</p>
              <p>Here is how PHP or ASP handles a file request:</p>
              <ul>
                <li>Sends the task to the computer's file system.</li>
                <li>Waits while the file system opens and reads the file.</li>
                <li>Returns the content to the client.</li>
                <li>Returns the content to the client.</li>
                <li>Ready to handle the next request.</li>
              </ul>
              <p>Here is how Node.js handles a file request:</p>
              <ul>
                <li>Sends the task to the computer's file system.</li>
                <li>Ready to handle the next request.</li>
                <li>When the file system has opened and read the file, the server returns the content to the client.</li>
              </ul>
              <p>Node.js eliminates the waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</p>
              <h2>Download Node.js</h2>
              <p>The official Node.js website has installation instructions for Node.js: <a href='https://nodejs.org'>https://nodejs.org</a></p>
              <h2>Traditional Web Server Model</h2>
              <p>In the traditional web server model, each request is handled by a dedicated thread from the thread pool. If no thread is available in the thread pool at any point of time then the request waits till the next available thread. Dedicated thread executes a particular request and does not return to thread pool until it completes the execution and returns a response.</p>
              <img className = 'imagesnode' src= {e1}/>
              <h2>Node.js Process Model</h2>
              <p>Node.js processes user requests differently when compared to a traditional web server model. Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms. All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response. An event loop is constantly watching for the events to be raised for an asynchronous job and executing callback function when the job completes. Internally, Node.js uses libev for the event loop which in turn uses internal C++ thread pool to provide asynchronous I/O. The following figure illustrates asynchronous web server model using Node.js.</p>
              <img className = 'imagesnode' src= {e2}/>
              <p>Node.js process model increases the performance and scalability with a few caveats. Node.js is not fit for an application which performs CPU-intensive operations like image processing or other heavy computation work because it takes time to process a request and thereby blocks the single thread.</p>
              <p><b>Node.js supports JavaScript. So, JavaScript syntax on Node.js is similar to the browser's JavaScript syntax.</b></p>
              <h2>Node.js Console/REPL</h2>
              <p>Node.js comes with virtual environment called REPL (aka Node shell). REPL stands for Read-Eval-Print-Loop. It is a quick and easy way to test simple Node.js/JavaScript code. To launch the REPL (Node shell), open command prompt (in Windows) or terminal (in Mac or UNIX/Linux) and type node as shown below. It will change the prompt to &gt; in Windows and MAC.</p>
              <h2>Node.js Module</h2>
              <p>Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application. Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate .js file under a separate folder. Node.js implements CommonJS modules standard. CommonJS is a group of volunteers who define JavaScript standards for web server, desktop, and console application.</p>
              <h2>Node.js Module Types</h2>
              <p>Node.js includes three types of modules:</p>
              <ul>
                <li>Core Modules</li>
                <li>Local Modules</li>
                <li>Third Party Modules</li>
              </ul>
              <h2>Node.js Core Modules</h2>
              <p>Node.js is a light weight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application.</p>
              <p>Some of the important core modules in Node.js.</p>
              <ul>
                <li><b>http</b> - http module includes classes, methods and events to create Node.js http server.</li>
                <li><b>url</b> - url module includes methods for URL resolution and parsing.</li>
                <li><b>querystring</b> - querystring module includes methods to deal with query string.</li>
                <li><b>path</b> - path module includes methods to deal with file paths.</li>
                <li><b>fs</b> - fs module includes classes, methods, and events to work with file I/O.</li>
                <li><b>util</b> - util module includes utility functions useful for programmers.</li>
              </ul>
              <h2>Loading Core Modules</h2>
              <p>In order to use Node.js core or NPM modules, you first need to import it using require() function as shown below.</p>
              <p><b>var module = require('module_name');</b></p>
              <p>As per above syntax, specify the module name in the require() function. The require() function will return an object, function, property or any other JavaScript type, depending on what the specified module returns.</p>
              <h2>Node.js Local Module</h2>
              <p>Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community can use it. For example, if you need to connect to MongoDB and fetch data then you can create a module for it, which can be reused in your application.</p>
              <p>In Node.js, module should be placed in a separate JavaScript file. So, create a Log.js file and write the following code in it.</p>
              <img className = 'imagesnode' src= {e3}/>
              <p>In the above example of logging module, we have created an object with three functions - info(), warning() and error(). At the end, we have assigned this object to module.exports. The module.exports in the above example exposes a log object as a module. The module.exports is a special object which is included in every JS file in the Node.js application by default. Use module.exports or exports to expose a function, object or variable as a module in Node.js. Now, let's see how to use the above logging module in our application.</p>
              <h2>Loading Local Module</h2>
              <p>To use local modules in your application, you need to load it using require() function in the same way as core module. However, you need to specify the path of JavaScript file of the module.</p>
              <img className = 'imagesnode' src= {e4}/>
              <p>In the above example, app.js is using log module. First, it loads the logging module using require() function and specified path where logging module is stored. Logging module is contained in Log.js file in the root folder. So, we have specified the path './Log.js' in the require() function. The '.' denotes a root folder. The require() function returns a log object because logging module exposes an object in Log.js using module.exports. So now you can use logging module as an object and call any of its function using dot notation e.g myLogModule.info() or myLogModule.warning() or myLogModule.error() Run the above example using command prompt (in Windows) as shown below.</p>
              <h2>Export Module in Node.js</h2>
              <p>The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.</p>
              <p>As mentioned above, exports is an object. So it exposes whatever you assigned to it as a module. For example, if you assign a string literal then it will expose that string literal as a module.</p>
              <p>The exports is an object. So, you can attach properties or methods to it. The following example exposes an object with a string property in Message.js file.</p>
              <p><b>exports.SimpleMessage = 'Hello world';</b></p>
              <p>In JavaScript, a function can be treated like a class. The following example exposes a function that can be used like a class.</p>
              <img className = 'imagesnode' src= {e5}/>
              <p>Use the full path of a module file where you have exported it using module.exports. For example, if the log module in the log.js is stored under the utility folder under the root folder of your application, then import it, as shown below.</p>
              <h2>NPM - Node Package Manager</h2>
              <p>Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages. The node community around the world creates useful modules and publishes them as packages in this repository.</p>
              <p>Official website: <a href='https://www.npmjs.com'>https://www.npmjs.com</a></p>
              <p>NPM is included with Node.js installation. After you install Node.js, verify NPM installation by writing the following command in terminal or command prompt.</p>
              <p><b>Common commands on NPM</b></p>
              <img className = 'imagesnode' src= {e6}/>
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

export default Part1n
