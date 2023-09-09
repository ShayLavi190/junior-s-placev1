import React from 'react'
import './Axios.css'
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
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Axios() {
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
        <a href="/react">Intro</a>
        <a href="/react/part1">Basics part 1</a>
        <a href="/react/part2">Basics part 2</a>
        <a href="/react/hooks">Hooks</a>
        <a href="/react/redux">Redux</a>
        <a href="/react/axios">Axios</a>
        <a href="/react/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockjs">
              <h2>Why do we need Axios ?</h2>
              <p>Let us first understand why do we need to use a library like Axios. JavaScript already provides built-in objects: XMLHttpRequest and the Fetch API for interacting with APIs. Axios in contrast to these built-in objects is an open-source library that we need to include in our application for making API calls over HTTP. It is similar to the Fetch API and returns a JavaScript Promise object but also includes many powerful features. One of the important capabilities of Axios is its isomorphic nature which means it can run in the browser as well as in server-side Node.js applications with the same codebase. Axios is also a promise-based HTTP client that can be used in plain JavaScript as well as in advanced JavaScript frameworks like React, Vue.js, and Angular. It supports all modern browsers, including support for IE 8 and higher. In the following sections, we will look at examples of using these features of Axios in our applications.</p>
              <h2>Installing Axios</h2>
              <p>We have created the following applications to simulate APIs on the server consumed by other applications on the server and the browser with REST APIs :</p>
              <img className = 'imagereact' src= {e1}/>
              <ul>
                <li>apiserver: This is a Node.js application written using the Express Framework that will contain the REST APIs.</li>
                <li>serversideapps: This is also a Node.js written in Express that will call the REST APIs exposed by the apiserver application using the Axios HTTP client.</li>
                <li>reactapp: This is a front-end application written in React which will also call the REST APIs exposed by the apiserver application.</li>
              </ul>
              <p> Instead of Express, we could have used any other JavaScript framework or even raw JavaScript applications. To understand Express, please refer to our Express series of articles starting with Getting started on Express. We will need to install the Axios library in two of these applications: serversideapps and reactapp which will be making API calls. Let us change to these directories one by one and install Axios using npm: <b>npm install axios</b></p>
              <p>We can see the axios module added as a dependency in the dependencies element. If we want to call APIs with Axios from a vanilla JavaScript application, then we need to include it from a Content delivery network (CDN) as shown here: <b>&lt;script src="https://unpkg.com/axios/dist/axios.min.js"&gt;&lt;/script&gt;</b></p>
              <h2>Sending Requests with the Axios Instance</h2>
              <p>Let us start by invoking a GET method with the Axios HTTP client from our server-side application: serversideapp. For doing this, we will add an Express route handler function with a URL: /products to the application. In the route handler function, we will fetch the list of products by calling an API from our apiserver with the URL: http://localhost:3002/products. We will use the signature: axios(config) on the default instance provided by the Axios HTTP client for doing this:</p>
              <img className = 'imagereact' src= {e2}/>
              <p>In this example, we are first calling require('axios') for getting an instance: axios set up with a default configuration. Then we are passing a configuration argument to the axios instance containing the method parameter set to the HTTP method: get and the url parameter set to the URL of the REST endpoint: http://localhost:3002/products. The url parameter is mandatory while we can omit the method parameter that will then default to get. This method returns a JavaScript Promise object which means the program does not wait for the method to complete before trying to execute the subsequent statement. The Promise is either fulfilled or rejected, depending on the response from the API. We use the then() method as in this example for processing the result. The then() method gets executed when the Promise is fulfilled . In our example, in the then method, we are extracting the list of products by calling apiResponse.data. Similarly, a POST request for adding a new product made with the axios default instance will look like this:</p>
              <img className = 'imagereact' src= {e3}/>
              <p>In this example, in addition to what we did for calling the GET method, we have set the data element containing the JSON representation of the new Product along with an Authorization header. We are processing the response in the then function on the Promise response where we are extracting the API response data by calling apiResponse.data. For more involved processing of the API response, it will be worthwhile to understand all the elements of the response returned by the API call made with axios : </p>
              <ul>
                <li>data: Response payload sent by the server</li>
                <li>status: HTTP status code from the server response</li>
                <li>statusText: HTTP status message from the server response</li>
                <li>headers: HTTP headers received in the API response</li>
                <li>config: config sent to the axios instance for sending the request</li>
                <li>request: Request that generated this response. It is the last ClientRequest instance in node.js (in redirects) and an XMLHttpRequest instance in the browser.</li>
              </ul>
              <h2>Sending Requests with the Convenience Instance Methods of Axios</h2>
              <p>Axios also provides an alternate signature for making the API calls by providing convenience methods for all the HTTP methods like:axios.get(), axios.post(), axios.put(), axios.delete(), etc. We can write the previous example for calling the GET method of the REST API using the convenience method: axios.get() as shown below:</p>
              <img className = 'imagereact' src= {e4}/>
              <p>In this example, in the Express route handler function, we are calling the get() method on the default instance of axios and passing the URL of the REST API endpoint as the sole argument. This code looks much more concise than the signature: axios(config) used in the example in the previous section. The signature: axios.get() is always preferable for calling the REST APIs due to its cleaner syntax. However, the signature: axios(config) of passing a config object containing the HTTP method, and URL parameters to the axios instance can be used in situations where we want to construct the API calls dynamically. The get() method returns a JavaScript Promise object similar to our earlier examples, where we extract the list of products inside the then function. Instead of appending the request query parameter in the URL in the previous example, we could have passed the request parameter in a separate method argument: params as shown below:</p>
              <img className = 'imagereact' src= {e5}/>
              <img className = 'imagereact' src= {e6}/>
              <h2>Using Axios in Front-End Applications</h2>
              <p>Let us look at an example of using Axios in a front-end application built with the React library. The below snippet is from a React component that calls the API for fetching products:</p>
              <img className = 'imagereact' src= {e7}/>
              <p>As we can see, the code for making the API call with Axios is the same as what we used in the Node.js application in the earlier sections.</p>
              <h2>Sending Multiple Concurrent Requests with Axios</h2>
              <p>In many situations, we need to combine the results from multiple APIs to get a consolidated result. With the Axios HTTP client, we can make concurrent requests to multiple APIs as shown in this example:</p>
              <img className = 'imagereact' src= {e8}/>
              <p>In this example, we are making requests to two APIs using the Promise.all() method. We pass an iterable of the two Promise objects returned by the two APIs as input to the method. In response, we get a single Promise object that resolves to an array of the results of the input Promise objects. This Promise object returned as the response will resolve only when all of the input promises are resolved, or if the input iterable contains no promises.</p>
              <h2>Overriding the default Instance of Axios</h2>
              <p>In all the examples we have seen so far, we used the require('axios') to get an instance of axios which is configured with default parameters. If we want to add a custom configuration like a timeout of 2 seconds, we need to use Axios.create() where we can pass the custom configuration as an argument. An Axios instance created with Axios.create() with a custom config helps us to reuse the provided configuration for all the API invocations made by that particular instance. Here is an example of an axios instance created with Axios.create() and used to make a GET request:</p>
              <img className = 'imagereact' src= {e9}/>
              <p>In this example, we are using axios.create() to create a new instance of Axios with a custom configuration that has a base URL of http://localhost:3002/products and a timeout of 1000 milliseconds. The configuration also has an Accept and Authorization headers set depending on the API being invoked. The timeout configuration specifies the number of milliseconds before the request times out. If the request takes longer than the timeout interval, the request will be aborted.</p>
              <h2>Intercepting Requests and Responses</h2>
              <p>We can intercept requests or responses of API calls made with Axios by setting up interceptor functions. Interceptor functions are of two types:</p>
              <ul>
                <li>Request interceptor for intercepting requests before the request is sent to the server.</li>
                <li>Response interceptor for intercepting responses received from the server.</li>
              </ul>
              <p>Here is an example of an axios instance configured with a request interceptor for capturing the start time and a response interceptor for computing the time taken to process the request:</p>
              <img className = 'imagereact' src= {e10}/>
              <p>In this example, we are setting the request.time to the current time in the request interceptor. In the response interceptor, we are capturing the current time in response.config.time.endTime and computing the duration by deducting from the current time, the start time captured in the request interceptor. Interceptors are a powerful feature that can be put to use in many use cases where we need to perform actions common to all API calls. In the absence of interceptors, we will need to repeat these actions in every API call. Some of these examples are:</p>
              <ul>
                <li>Verify whether the access token for making the API call has expired in the request interceptor. If the token has expired, fetch a new token with the refresh token.</li>
                <li>Attach specific headers required by the API to the request in the request interceptor. For example, add the Authorization header to every API call.</li>
                <li>Check for HTTP status, headers, and specific fields in the response to detect error conditions and trigger error handling logic.</li>
              </ul>
              <h2>Handling Errors in Axios</h2>
              <p>The response received from Axios is a JavaScript promise which has a then() function for promise chaining, and a catch() function for handling errors. So for handling errors, we should add a catch() function at the end of one or more then() functions as shown in this example:</p>
              <img className = 'imagereact' src= {e11}/>
              <p>In this example, we have put the error handling logic in the catch() function. The callback function in the catch() takes the error object as input. We come to know about the source of the error by checking for the presence of the response property and request property in the error object with error.response and error.request. An error object with a response property indicates that our server returned a 4xx/5xx error and accordingly return a helpful error message in the response. In contrast, An error object with a request property indicates network errors, a non-responsive backend, or errors caused by unauthorized or cross-domain requests. The error object may not have either a response or request object attached to it. This indicates errors related to setting up the request, which eventually triggered the error. An example of this condition is an URL parameter getting omitted while sending the request.</p>
              <h2>Cancelling Initiated Requests</h2>
              <p>We can also cancel or abort a request when we no longer require the requested data for example, when the user navigates from the current page to another page. To cancel a request, we use the AbortController class as shown in this code snippet from our React application:</p>
              <img className = 'imagereact' src= {e12}/>
              <p>As we can see in this example, we are first creating a controller object using the AbortController() constructor, then storing a reference to its associated AbortSignal object using the signal property of the AbortController. When the axios request is initiated, we pass in the AbortSignal as an option inside the request’s options object: &#123;signal: abortSignal&#125;. This associates the signal and controller with the axios request and allows us to abort the request by calling the abort() method on the controller.</p>
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

export default Axios
