import React from 'react'
import './Part2.css'
import Navbar from '../../../components/Navbar/Navbar'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import e7 from './e7.png'
import e8 from './e8.png'
import e9 from './e9.png'
import e10 from './e10.png'
import e11 from './e11.png'
import e12 from './e12.png'
import e13 from './e13.png'
import e14 from './e14.png'
import e15 from './e15.png'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Part2n() {
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
      <a href="/nodejs/part1">Basics part 1</a>
        <a href="/nodejs/part2">Basics part 2</a>
        <a href="/nodejs/mongodb">MongoDB</a>
        <a href="/nodejs/mysql">MySQL</a>
        <a href="/nodejs/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockjs">
              <h2>Node.js Web Server</h2>
              <p>To access web pages of any web application, you need a web server. The web server will handle all the http requests for the web application e.g IIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications. Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.</p>
              <h2>Create Node.js Web Server</h2>
              <p>Node.js makes it easy to create a simple web server that processes incoming requests asynchronously.</p>
              <p>The following example is a simple Node.js web server contained in server.js file.</p>
              <img className = 'imagesnode' src= {e1}/>
              <p>In the above example, we import the http module using require() function. The http module is a core module of Node.js, so no need to install it using NPM. The next step is to call createServer() method of http and specify callback function with request and response parameter. Finally, call listen() method of server object which was returned from createServer() method with port number, to start listening to incoming requests on port 5000. You can specify any unused port here.</p>
              <h2>Handle HTTP Request</h2>
              <p>The http.createServer() method includes request and response parameters which is supplied by Node.js. The request object can be used to get information about the current HTTP request e.g., url, request header, and data. The response object can be used to send a response for a current HTTP request.</p>
              <p>The following example demonstrates handling HTTP request and response in Node.js.</p>
              <img className = 'imagesnode' src= {e2}/>
              <p>In the above example, req.url is used to check the url of the current request and based on that it sends the response. To send a response, first it sets the response header using writeHead() method and then writes a string as a response body using write() method. Finally, Node.js web server sends the response using end() method.</p>
              <h2>Sending JSON Response</h2>
              <p>The following example demonstrates how to serve JSON response from the Node.js web server.</p>
              <img className = 'imagesnode' src= {e3}/>
              <h2>Node.js File System</h2>
              <p>Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations. Let's see some of the common I/O operation examples using fs module.</p>
              <p>Use the fs.readFile() method to read the physical file asynchronously.</p>
              <p><b>Parameter Description:</b></p>
              <ul>
                <il>filename: Full path and name of the file as a string.</il>
                <li>options: The options parameter can be an object or string which can include encoding and flag. The default encoding is utf8 and default flag is "r".</li>
                <li>callback: A function with two parameters err and fd. This will get called when readFile operation completes.</li>
              </ul>
              <p>The following example demonstrates reading existing TestFile.txt asynchronously.</p>
              <img className = 'imagesnode' src= {e4}/>
              <h2>Writing a File</h2>
              <p>Use the fs.writeFile() method to write data to a file. If file already exists then it overwrites the existing content otherwise it creates a new file and writes data into it.</p>
              <p><b>Parameter Description:</b></p>
              <ul>
                <li>filename: Full path and name of the file as a string.</li>
                <li>Data: The content to be written in a file.</li>
                <li>options: The options parameter can be an object or string which can include encoding, mode and flag. The default encoding is utf8 and default flag is "r".</li>
                <li>callback: A function with two parameters err and fd. This will get called when write operation completes.</li>
              </ul>
              <p>The following example creates a new file called test.txt and writes "Hello World" into it asynchronously.</p>
              <img className = 'imagesnode' src= {e5}/>
              <p>In the same way, use the fs.appendFile() method to append the content to an existing file.</p>
              <h2>Open File</h2>
              <p>You can open a file for reading or writing using the fs.open() method.</p>
              <p><b>Parameter Description:</b></p>
              <ul>
                <li>path: Full path with name of the file as a string.</li>
                <li>Flag: The flag to perform operation.</li>
                <li>Mode: The mode for read, write or readwrite. Defaults to 0666 readwrite.</li>
                <li>callback: A function with two parameters err and fd. This will get called when file open operation completes.</li>
              </ul>
              <p>The following table lists all the flags which can be used in read/write operation.</p>
              <img className = 'imagesnode' src= {e6}/>
              <p>The following example opens an existing file and reads its content.</p>
              <img className = 'imagesnode' src= {e7}/>
              <h2>Delete File</h2>
              <p>Use the fs.unlink() method to delete an existing file.</p>
              <p>The following example deletes an existing file.</p>
              <img className = 'imagesnode' src= {e8}/>
              <p><b>Important method of fs module</b></p>
              <img className = 'imagesnode' src= {e9}/>
              <h2>Debug Node.js Application</h2>
              <p>In this section, you will learn ways to debug Node.js application. You can debug Node.js application using various tools including following:</p>
              <ul>
                <li>Core Node.js debugger</li>
                <li>Node Inspector</li>
                <li>Built-in debugger in IDEs</li>
              </ul>
              <p><b>Core Node.js Debugger</b></p>
              <p>Node.js provides built-in non-graphic debugging tool that can be used on all platforms. It provides different commands for debugging Node.js application. Consider the following simple Node.js application contained in app.js file.</p>
              <img className = 'imagesnode' src= {e10}/>
              <p>Write debugger in your JavaScript code where you want debugger to stop. For example, we want to check the "data" parameter in the above example. So, write debugger; inside callback function as above.</p>
              <p><b>The following table lists important debugging commands:</b></p>
              <img className = 'imagesnode' src= {e11}/>
              <h2>Frameworks for Node.js</h2>
              <p>There are various third party open-source frameworks available in Node Package Manager which makes Node.js application development faster and easy. You can choose an appropriate framework as per your application requirements. The following table lists frameworks for Node.js.</p>
              <img className = 'imagesnode' src= {e12}/>
              <h2>Express.js</h2>
              <p>"Express is a fast, unopinionated minimalist web framework for Node.js" - official web site: Expressjs.com Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js. Express.js is based on the Node.js middleware module called connect which in turn uses http module. So, any middleware which is based on connect will also work with Express.js.</p>
              <p><b>Advantages of Express.js</b></p>
              <ul>
                <li>Makes Node.js web application development fast and easy.</li>
                <li>Easy to configure and customize.</li>
                <li>Allows you to define routes of your application based on HTTP methods and URLs.</li>
                <li>Includes various middleware modules which you can use to perform additional tasks on request and response.</li>
                <li>Easy to integrate with different template engines like Jade, Vash, EJS etc.</li>
                <li>Allows you to define an error handling middleware.</li>
                <li>Easy to serve static files and resources of your application.</li>
                <li>Allows you to create REST API server.</li>
                <li>Easy to connect with databases such as MongoDB, Redis, MySQL</li>
              </ul>
              <p>You can install express.js using npm. The following command will install latest version of express.js globally on your machine so that every Node.js application on your machine can use it.</p>
              <p><b>npm install -g express</b></p>
              <h2>Express.js Web Application</h2>
              <p>Express.js provides an easy way to create web server and render HTML pages for different HTTP requests by configuring routes for your application.</p>
              <p><b>Web Server</b></p>
              <p>First of all, import the Express.js module and create the web server as shown below.</p>
              <img className = 'imagesnode' src= {e13}/>
              <p>In the above example, we imported Express.js module using require() function. The express module returns a function. This function returns an object which can be used to configure Express application (app in the above example). The app object includes methods for routing HTTP requests, configuring middleware, rendering HTML views and registering a template engine. The app.listen() function creates the Node.js web server at the specified host and port. It is identical to Node's http.Server.listen() method. Run the above example using node app.js command and point your browser to http://localhost:5000. It will display Cannot GET / because we have not configured any routes yet.</p>
              <p><b>Configure Routes</b></p>
              <p>Use app object to define different routes of your application. The app object includes get(), post(), put() and delete() methods to define routes for HTTP GET, POST, PUT and DELETE requests respectively. The following example demonstrates configuring routes for HTTP requests.</p>
              <img className = 'imagesnode' src= {e14}/>
              <p>In the above example, app.get(), app.post(), app.put() and app.delete() methods define routes for HTTP GET, POST, PUT, DELETE respectively. The first parameter is a path of a route which will start after base URL. The callback function includes request and response object which will be executed on each request.</p>
              <p><b>Body Parser</b></p>
              <p>To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser. The middleware was a part of Express.js earlier but now you have to install it separately. This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request. Install body-parser using NPM as shown below.</p>
              <p><b>npm install body-parser --save</b></p>
              <p>Now, import body-parser and get the POST request data as shown below.</p>
              <img className = 'imagesnode' src= {e15}/>
              <p>In the above example, POST data can be accessed using req.body. The req.body is an object that includes properties for each submitted form. Index.html contains firstName and lastName input types, so you can access it using req.body.firstName and req.body.lastName.</p>
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

export default Part2n
